using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using library_utma_backend.Context;
using library_utma_backend.Models;
using library_utma_backend.DTO;
using library_utma_backend.DTO.Loans;
using library_utma_backend.Helpers;

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoansController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoansController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/Loans
        [HttpPost]
        [AuthMiddleware]
        public async Task<ActionResult<ResponseMessage>> AddLoan([FromBody] LoanRequestDTO loanRequest)
        {
            try
            {
                if (loanRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var student = await _context.Student.FirstOrDefaultAsync(s => s.Id == loanRequest.StudentId);

                if (student == null)
                {
                    return NotFound("Estudiante no encontrado.");
                }

                var book = await _context.Book.FirstOrDefaultAsync(b => b.ISBN == loanRequest.BookIsbn);

                if (book == null)
                {
                    return NotFound("Libro no encontrado.");
                }

                if (book.Amount <= 0)
                {
                    return BadRequest("No hay ejemplares disponibles de este libro.");
                }

                book.Amount--;

                _context.Entry(book).Property(b => b.Amount).IsModified = true;

                var loan = new Loan
                {
                    StudentId = loanRequest.StudentId,
                    BookISBN = loanRequest.BookIsbn,
                    IsReturned = false,
                    LoanDate = DateTime.Now
                };

                _context.Loan.Add(loan);
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Préstamo agregado correctamente" });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // GET: api/Loans
        [HttpGet]
        [AuthMiddleware]
        public async Task<ActionResult<LoansSummaryResponseDTO>> GetLoans(bool isReturned, int page = 1)
        {
            try
            {
                if (page < 1)
                {
                    return BadRequest("El número de página debe ser mayor o igual a 1.");
                }

                const int pageSize = 10;
                var query = _context.Loan.AsQueryable();

                var filteredQuery = query.Where(l => l.IsReturned == isReturned);
                
                var totalRecords = await filteredQuery.CountAsync();

                var skip = (page - 1) * pageSize;
                var hasMore = (skip + pageSize) < totalRecords;

                var loans = await filteredQuery
                    .Include(l => l.Student)
                    .Include(l => l.Book)
                    .Skip(skip)
                    .Take(pageSize)
                    .Select(l => new LoanSummaryDTO
                    {
                        Id = l.Id,
                        StudentId = l.StudentId,
                        StudentName = l.Student.Name,
                        BookName = l.Book.Title,
                        LoanDate = l.LoanDate,
                        ReturnDate = l.ReturnDate,
                        IsReturned = l.IsReturned
                    })
                    .ToListAsync();

                if (loans.Count == 0)
                {
                    return NoContent();
                }

                return Ok(new LoansSummaryResponseDTO
                {
                    Loans = loans,
                    HasMore = hasMore
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }


        // PUT: api/Loans/{id}
        [HttpPut("{id}")]
        [AuthMiddleware]
        public async Task<ActionResult<ResponseMessage>> ReturnLoan(int id)
        {
            try
            {
                if (id <= 0)
                {
                    return BadRequest("El ID del préstamo no es válido.");
                }

                var loan = await _context.Loan.FirstOrDefaultAsync(l => l.Id == id);

                if (loan == null)
                {
                    return NotFound("Préstamo no encontrado.");
                }

                if (loan.IsReturned)
                {
                    return Conflict("El préstamo ya ha sido devuelto.");
                }

                var book = await _context.Book
                    .FirstOrDefaultAsync(b => b.ISBN == loan.BookISBN);

                if (book == null)
                {
                    return NotFound("El libro no existe en la base de datos");
                }

                book.Amount++;

                loan.IsReturned = true;
                loan.ReturnDate = DateTime.Now;

                _context.Entry(loan).Property(l => l.IsReturned).IsModified = true;
                _context.Entry(loan).Property(l => l.ReturnDate).IsModified = true;
                _context.Entry(book).Property(b => b.Amount).IsModified = true;

                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Préstamo devuelto correctamente" });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}
