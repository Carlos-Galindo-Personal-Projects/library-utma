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

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BooksController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult<ResponseMessage>> AddBook([FromBody] BookRequestDTO bookRequest)
        {
            try
            {
                if (bookRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var bookExists = await _context.Book
                    .AnyAsync(b => b.ISBN == bookRequest.ISBN);

                if (bookExists) {
                    return Conflict("El libro ya existe.");
                }

                var book = new Book
                {
                    ISBN = bookRequest.ISBN,
                    Title = bookRequest.Title,
                    Author = bookRequest.Author,
                    GenreId = bookRequest.GenreId,
                    Year = bookRequest.Year,
                    Amount = bookRequest.Amount
                };

                _context.Book.Add(book);
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Libro agregado correctamente" });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // GET: api/Books/summary/{genre}
        [HttpGet("summary/{genre}")]
        public async Task<ActionResult<IEnumerable<BooksSummaryDTO>>> GetSummaryBooks(int genreId)
        {
            try
            {
                var query = _context.Book.AsQueryable();

                if (genreId > 0)
                {
                    query = query.Where(b => b.GenreId == genreId);
                }

                var books = await query
                    .Select(b => new BooksSummaryDTO
                    {
                        ISBN = b.ISBN,
                        Title = b.Title,
                        Author = b.Author,
                        Genre = b.Genre.Name,
                        Year = b.Year,
                        Amount = b.Amount
                    })
                    .ToListAsync();

                if (books.Count <= 0)
                {
                    return NoContent();
                }

                return Ok(books);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // PUT: api/Books/{isbn}
        [HttpPut("{isbn}")]
        public async Task<ActionResult<ResponseMessage>> UpdateBookAmount(string isbn, [FromBody] BookAmountRequestDTO amountRequest)
        {
            try
            {

                if (string.IsNullOrEmpty(isbn))
                {
                    return BadRequest("El ISBN no puede ser nulo o vacío.");
                }

                if (amountRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var book = await _context.Book
                    .FirstOrDefaultAsync(b => b.ISBN == isbn);

                if (book == null)
                {
                    return NotFound("El libro especificado no existe.");
                }

                book.Amount = amountRequest.Amount;

                _context.Entry(book).Property(b => b.Amount).IsModified = true;
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Libro actualizado correctamente." });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}