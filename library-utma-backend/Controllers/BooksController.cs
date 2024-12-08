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

                var book = new Book
                {
                    ISBN = bookRequest.ISBN,
                    Title = bookRequest.Title,
                    Author = bookRequest.Author,
                    Genre = bookRequest.Genre,
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
        public async Task<ActionResult<IEnumerable<BooksSummaryDTO>>> GetSummaryBooks(string genre)
        {
            try
            {
                var query = _context.Book.AsQueryable();

                if (!string.Equals(genre, "All", StringComparison.OrdinalIgnoreCase))
                {
                    query = query.Where(b => b.Genre == genre);
                }

                var books = await query
                    .Select(b => new BooksSummaryDTO
                    {
                        ISBN = b.ISBN,
                        Title = b.Title,
                        Author = b.Author,
                        Genre = b.Genre,
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
    }
}
