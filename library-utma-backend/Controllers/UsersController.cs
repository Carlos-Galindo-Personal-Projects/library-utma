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
        /// <response code="400">La solicitud es nula o la contraseña es incorrecta.</response>
        /// <response code="404">El usuario con el email especificado no existe.</response>
        /// <response code="500">Error interno del servidor.</response>
        // POST: api/Users/Login
        [HttpPost("Login")]
        public async Task<ActionResult<JsonWebToken>> Login([FromBody] LoginRequestDTO loginRequest)
        {
            try
            {
                if (loginRequest == null)
                {
                    return BadRequest("La solicitud no puede ser nula.");
                }

                var user = await _context.User.FirstOrDefaultAsync(u => u.Email == loginRequest.Email);

                if (user == null)
                {
                    return NotFound($"El usuario con el email {loginRequest.Email} no existe.");
                }

                var checkPassword = _user.VerifyPassword(loginRequest.Password, user.Password);

                if (!checkPassword)
                {
                    return BadRequest("La contraseña es incorrecta.");
                }

                var token = _jwt.GenerateToken(user.Name, user.UserType.Name);

                return Ok(token);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
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
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
