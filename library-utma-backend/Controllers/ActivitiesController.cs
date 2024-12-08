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
using System.Security.Cryptography.X509Certificates;

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ActivitiesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Activities
        [HttpPost]
        public async Task<ActionResult<ResponseMessage>> AddAccess([FromBody] ActivityRequestDTO activityRequest)
        {
            try
            {
                if (activityRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var student = await _context.Student
                    .FirstOrDefaultAsync(s => s.Id == activityRequest.StudentId);

                if (student == null)
                {
                    return NotFound("El estudiante especificado no existe.");
                }

                var activity = new Activity
                {
                    StudentId = activityRequest.StudentId,
                    Description = activityRequest.Description,
                    InsideLibrary = true,
                    InitialHour = DateTime.Now,
                    FinalHour = null,
                    CapturistId = 1
                };

                _context.Activity.Add(activity);
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage
                {
                    Message = "Actividad registrada exitosamente."
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // PUT: api/Activities/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<ResponseMessage>> UpdateAccess(int id)
        {
            try
            {

                if (id <= 0)
                {
                    return BadRequest("El id de la actividad no puede ser menor o igual a cero.");
                }

                var activity = await _context.Activity
                    .FirstOrDefaultAsync(a => a.Id == id);

                if (activity == null)
                {
                    return NotFound("La actividad especificada no existe.");
                }
                activity.FinalHour = DateTime.Now;
                activity.InsideLibrary = false;

                _context.Entry(activity).Property(a => a.FinalHour).IsModified = true;
                _context.Entry(activity).Property(a => a.InsideLibrary).IsModified = true;

                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage
                {
                    Message = "Actividad actualizada exitosamente."
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // GET: api/Activities/Active-Activities
        [HttpGet("Active-Activities")]
        public async Task<ActionResult<IEnumerable<ActiveActivitiesResponseDTO>>> GetActiveActivities()
        {
            try
            {
                var activeActivities = await _context.Activity
                    .Where(a => a.InsideLibrary == true)
                    .Include(a => a.Student)
                    .Select(a => new ActiveActivitiesResponseDTO
                    {
                        Id = a.Id,
                        StudentId = a.StudentId,
                        StudentName = a.Student.Name,
                        Description = a.Description,
                        InitialHour = a.InitialHour
                    })
                    .ToListAsync();

                if (activeActivities.Count <= 0)
                {
                    return NoContent();
                }

                return Ok(activeActivities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}
