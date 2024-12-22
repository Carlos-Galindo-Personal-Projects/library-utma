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
using library_utma_backend.DTO.Books;
using library_utma_backend.DTO.Forms;

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

                if (bookExists)
                {
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

        // GET: api/Books/summary
        [HttpGet("summary")]
        public async Task<ActionResult<BooksSummaryResponseDTO>> GetSummaryBooks(int genreId, int page = 1)
        {
            try
            {
                if (page < 1)
                {
                    return BadRequest("El número de página debe ser mayor o igual a 1.");
                }

                const int pageSize = 10;
                var query = _context.Book.AsQueryable();

                if (genreId > 0)
                {
                    query = query.Where(b => b.GenreId == genreId);
                }

                var totalRecords = await query.CountAsync();

                var skip = (page - 1) * pageSize;
                var hasMore = (skip + pageSize) < totalRecords;

                var books = await query
                    .Skip(skip)
                    .Take(pageSize)
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

                if (books.Count == 0)
                {
                    return NoContent();
                }

                return Ok(new BooksSummaryResponseDTO
                {
                    Books = books,
                    HasMore = hasMore
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // GET: api/Books/{isbn}
        [HttpGet("{isbn}")]
        public async Task<ActionResult<FormResponseDTO>> GetBookByISBN(string isbn)
        {
            try
            {
                if (string.IsNullOrEmpty(isbn))
                {
                    return BadRequest("El ISBN no puede ser nulo o vacío.");
                }

                var book = await _context.Book
                    .Where(b => b.ISBN == isbn)
                    .Select(b => new BookResponseDTO
                    {
                        ISBN = b.ISBN,
                        Title = b.Title,
                        Author = b.Author,
                        GenreId = b.GenreId,
                        Year = b.Year,
                        Amount = b.Amount
                    })
                    .FirstOrDefaultAsync();

                if (book == null)
                {
                    return NotFound("El libro especificado no existe.");
                }

                var genres = await _context.Genre
                    .Select(g => new GenresResponseDTO
                    {
                        Id = g.Id,
                        Name = g.Name
                    })
                    .ToListAsync();

                var response = new FormResponseDTO
                {
                    Book = book,
                    Genres = genres
                };

                if (book == null)
                {
                    return NotFound("El libro especificado no existe.");
                }

                if (genres.Count == 0)
                {
                    return NoContent();
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }


        // PUT: api/Books/{isbn}
        [HttpPut("{isbn}")]
        public async Task<ActionResult<ResponseMessage>> UpdateBookAmount(string isbn, [FromBody] BookUpdateRequestDTO updatedBookReequest)
        {
            try
            {

                if (string.IsNullOrEmpty(isbn))
                {
                    return BadRequest("El ISBN no puede ser nulo o vacío.");
                }

                if (updatedBookReequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var book = await _context.Book
                    .FirstOrDefaultAsync(b => b.ISBN == isbn);

                if (book == null)
                {
                    return NotFound("El libro especificado no existe.");
                }

                book.Amount = updatedBookReequest.Amount;
                book.Author = updatedBookReequest.Author;
                book.GenreId = updatedBookReequest.GenreId;
                book.Title = updatedBookReequest.Title;
                book.Year = updatedBookReequest.Year;

                _context.Entry(book).Property(b => b.Amount).IsModified = true;
                _context.Entry(book).Property(b => b.Author).IsModified = true;
                _context.Entry(book).Property(b => b.GenreId).IsModified = true;
                _context.Entry(book).Property(b => b.Title).IsModified = true;
                _context.Entry(book).Property(b => b.Year).IsModified = true;
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Libro actualizado correctamente." });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // DELETE: api/Books/{isbn}
        [HttpDelete("{isbn}")]
        public async Task<ActionResult<ResponseMessage>> DeleteBook(string isbn)
        {
            try
            {
                if (string.IsNullOrEmpty(isbn))
                {
                    return BadRequest("El ISBN no puede ser nulo o vacío.");
                }
                var book = await _context.Book
                    .FirstOrDefaultAsync(b => b.ISBN == isbn);

                if (book == null)
                {
                    return NotFound("El libro especificado no existe.");
                }

                _context.Book.Remove(book);
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage { Message = "Libro eliminado correctamente." });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}