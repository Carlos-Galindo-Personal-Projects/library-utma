using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace library_utma_backend.Helpers
{
    public class AuthMiddleware : ActionFilterAttribute
    {
        private readonly string _issuer;
        private readonly string _audience;
        private readonly string _key;

        public AuthMiddleware()
        {
            // Leer configuraciones desde variables de entorno
            _issuer = Environment.GetEnvironmentVariable("ISSUER") ?? throw new ArgumentNullException("ISSUER no configurado");
            _audience = Environment.GetEnvironmentVariable("AUDIENCE") ?? throw new ArgumentNullException("AUDIENCE no configurado");
            _key = Environment.GetEnvironmentVariable("KEY") ?? throw new ArgumentNullException("KEY no configurado");
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var cookie = context.HttpContext.Request.Cookies["AuthToken"];

            Console.WriteLine($"Cookie: {cookie}");

            if (string.IsNullOrWhiteSpace(cookie))
            {
                context.Result = new UnauthorizedObjectResult("Token no proporcionado.");
                return;
            }

            try
            {
                var handler = new JwtSecurityTokenHandler();
                var tokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = _issuer,
                    ValidAudience = _audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key))
                };

                handler.ValidateToken(cookie, tokenValidationParameters, out var validatedToken);

                var jwtToken = validatedToken as JwtSecurityToken;

                if (jwtToken == null)
                {
                    context.Result = new UnauthorizedObjectResult("Token inválido.");
                    return;
                }

                var userIdClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == "Id")?.Value;
                var userTypeClaim = jwtToken.Claims.FirstOrDefault(claim => claim.Type == "Utstr")?.Value;

                if (string.IsNullOrWhiteSpace(userIdClaim) || string.IsNullOrWhiteSpace(userTypeClaim))
                {
                    context.Result = new UnauthorizedObjectResult("Claims faltantes en el token.");
                    return;
                }

                if (!int.TryParse(userIdClaim, out int userId) || userId <= 0)
                {
                    context.Result = new UnauthorizedObjectResult("ID de usuario inválido.");
                    return;
                }

                context.HttpContext.Items["UserRole"] = userTypeClaim;
                context.HttpContext.Items["UserId"] = userId;
            }
            catch (SecurityTokenException ex)
            {
                context.Result = new UnauthorizedObjectResult($"Token inválido: {ex.Message}");
                return;
            }

            base.OnActionExecuting(context);
        }
    }
}
