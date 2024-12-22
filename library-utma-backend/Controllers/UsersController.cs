using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using library_utma_backend.Context;
using library_utma_backend.Models;
using library_utma_backend.Helpers;
using Microsoft.AspNetCore.Identity.Data;
using library_utma_backend.DTO;
using library_utma_backend.DTO.User;

namespace library_utma_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly User _user;
        private readonly JsonWebToken _jwt;

        public UsersController(AppDbContext context, User user, JsonWebToken jwt)
        {
            _context = context;
            _jwt = jwt;
            _user = user;
        }

        /// <summary>
        /// Autenticación de usuario y generación de token JWT.
        /// </summary>
        /// <remarks>
        /// Este endpoint recibe un objeto de tipo LoginRequestDTO con las propiedades Email y Password.
        /// Valida que el email exista en la base de datos y que la contraseña sea correcta.
        /// Devuelve un token JWT si la autenticación es exitosa.
        /// </remarks>
        /// <param name="loginRequest">Objeto que contiene el email y la contraseña del usuario.</param>
        /// <returns>Un JWT si la autenticación es exitosa.</returns>
        /// <response code="200">JWT generado exitosamente.</response>
        /// <response code="400">La solicitud es nula.</response>
        /// <response code="401">El email o la contraseña son incorrectos.</response>
        /// <response code="404">El usuario con el email especificado no existe.</response>
        /// <response code="500">Error interno del servidor.</response>
        // POST: api/Users/Login
        [HttpPost("Login")]
        public async Task<ActionResult<ResponseMessage>> Login([FromBody] LoginRequestDTO loginRequest)
        {
            try
            {
                if (loginRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var user = await _context.User
                    .Include(u => u.UserType)
                    .FirstOrDefaultAsync(u => u.Email == loginRequest.Email);

                if (user == null)
                {
                    return Unauthorized($"El usuario con el email {loginRequest.Email} no existe.");
                }

                var checkPassword = _user.VerifyPassword(loginRequest.Password, user.Password);

                if (!checkPassword)
                {
                    return Unauthorized("La contraseña es incorrecta.");
                }

                var token = _jwt.GenerateToken(user.Id ,user.Name, user.UserType.Name);

                Response.Cookies.Append("AuthToken", token, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTime.UtcNow.AddHours(12),
                    Path = "/"
                });

                return Ok(new ResponseMessage { Message = "Sesión iniciada correctamente" });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // POST: api/Users/Logout
        [HttpPost("Logout")]
        [AuthMiddleware]
        public ActionResult<ResponseMessage> Logout()
        {
            try
            {
                Response.Cookies.Append("AuthToken", string.Empty, new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTime.UtcNow.AddDays(-1)
                });

                return Ok(new ResponseMessage { Message = "Sesión cerrada correctamente." });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }


        /// <summary>
        /// Registro de un nuevo usuario.
        /// </summary>
        /// <remarks>
        /// Este endpoint recibe un objeto de tipo RegisterRequestDTO con las propiedades Name, Email, Password y UserTypeId.
        /// Valida que el email no exista en la base de datos y que el tipo de usuario sea válido.
        /// Si todas las validaciones son exitosas, crea un nuevo usuario y lo guarda en la base de datos.
        /// </remarks>
        /// <param name="registerRequestDTO">Objeto que contiene los datos necesarios para registrar al usuario, como nombre, correo electrónico, contraseña y tipo de usuario.</param>
        /// <returns>Un mensaje de éxito si el registro es exitoso.</returns>
        /// <response code="200">Usuario registrado exitosamente.</response>
        /// <response code="400">La solicitud es nula o el id del tipo de usuario no es válido.</response>
        /// <response code="409">El usuario con el email especificado ya existe.</response>
        /// <response code="404">El tipo de usuario con el id especificado no existe.</response>
        /// <response code="500">Error interno del servidor.</response>
        // POST: api/Users/Register
        [HttpPost("Register")]
        public async Task<ActionResult<ResponseMessage>> Register([FromBody] RegisterRequestDTO registerRequestDTO)
        {
            try
            {
                if (registerRequestDTO == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var user = await _context.User.FirstOrDefaultAsync(u => u.Email == registerRequestDTO.Email);

                if (user != null)
                {
                    return Conflict($"El usuario con el email {registerRequestDTO.Email} ya existe.");
                }

                if (registerRequestDTO.UserTypeId <= 0)
                {
                    return BadRequest("El id del tipo de usuario no puede ser menor o igual a cero.");
                }

                var userType = await _context.UserType.FirstOrDefaultAsync(ut => ut.Id == registerRequestDTO.UserTypeId);

                if (userType == null)
                {
                    return NotFound($"El tipo de usuario con el id {registerRequestDTO.UserTypeId} no existe.");
                }

                var newUser = new User
                {
                    Name = registerRequestDTO.Name,
                    Email = registerRequestDTO.Email,
                    Password = _user.HashPassword(registerRequestDTO.Password),
                    UserTypeId = registerRequestDTO.UserTypeId
                };

                _context.User.Add(newUser);
                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage
                {
                    Message = "Usuario registrado exitosamente."
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }

        // DELETE: api/Users/maintenance
        [HttpDelete("maintenance")]
        public async Task<ActionResult<ResponseMessage>> MaintenanceDB()
        {
            try
            {
                var oneMonthAgo = DateTime.Now.AddMonths(-1);

                var activitiesToDelete = _context.Activity
                    .Where(a => !a.InsideLibrary && a.FinalHour != null && a.FinalHour < oneMonthAgo);

                var loansToDelete = _context.Loan
                    .Where(l => l.ReturnDate != null && l.ReturnDate < oneMonthAgo && l.IsReturned == true);

                _context.Activity.RemoveRange(activitiesToDelete);
                _context.Loan.RemoveRange(loansToDelete);

                await _context.SaveChangesAsync();

                return Ok(new ResponseMessage
                {
                    Message = "Base de datos limpiada correctamente."
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Error interno del servidor: {e.Message}");
            }
        }
    }
}
