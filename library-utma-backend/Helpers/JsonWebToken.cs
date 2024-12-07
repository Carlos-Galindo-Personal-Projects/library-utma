using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace library_utma_backend.Helpers
{
    public class JsonWebToken
    {
        private readonly string _key;
        private readonly string _issuer;
        private readonly string _audience;

        public JsonWebToken()
        {

            _key = System.Environment.GetEnvironmentVariable("KEY") ?? throw new ArgumentNullException("Jwt:Key no se encuentra en la configuración.");
            _issuer = System.Environment.GetEnvironmentVariable("ISSUER") ?? throw new ArgumentNullException("Jwt:Issuer no se encuentra en la configuración.");
            _audience = System.Environment.GetEnvironmentVariable("AUDIENCE") ?? throw new ArgumentNullException("Jwt:Audience no se encuentra en la configuración.");
        }

        public string GenerateToken(string name, string userType)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentNullException(nameof(name), "El nombre del usuario no puede ser nulo o vacío.");
            }

            if (string.IsNullOrWhiteSpace(userType))
            {
                throw new ArgumentOutOfRangeException(nameof(userType), "El tipo de usuario no puede ser nulo o vacío.");
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Name, name),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("Utstr", userType),
            };

            var token = new JwtSecurityToken(
                issuer: _issuer,
                audience: _audience,
                claims: claims,
                expires: DateTime.Now.AddHours(12),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
