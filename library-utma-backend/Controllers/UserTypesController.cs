using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using library_utma_backend.Context;
using library_utma_backend.Models;
using library_utma_backend.DTO.UserTypes;
using library_utma_backend.Helpers;

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserTypesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/UserTypes
        [HttpGet]
        [AuthMiddleware]
        public async Task<ActionResult<IEnumerable<UserTypeResponseDTO>>> GetUserType()
        {
            try
            {
                var userTypes = await _context.UserType
                    .Select(ut => new UserTypeResponseDTO
                    {
                        Id = ut.Id,
                        Name = ut.Name
                    })
                    .ToListAsync();

                if (userTypes.Count == 0)
                {
                    return NoContent();
                }

                return Ok(userTypes);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}
