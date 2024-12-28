using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using library_utma_backend.Context;
using library_utma_backend.Models;
using library_utma_backend.DTO.Students;
using library_utma_backend.DTO.Books;
using library_utma_backend.Helpers;

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        [AuthMiddleware]
        public async Task<ActionResult<IEnumerable<StudentResponseDTO>>> GetStudent(string id)
        {
            try
            {
                if (string.IsNullOrEmpty(id))
                {
                    return BadRequest("La matrícula del estudiante es requerida");
                }

                var students = await _context.Student
                    .Where(s => s.Id.Contains(id))
                    .Select(s => new StudentResponseDTO
                    {
                        Id = s.Id,
                        Name = s.Name
                    })
                    .ToListAsync();

                if (students.Count == 0)
                {
                    return NoContent();
                }

                return Ok(students);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}
