using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required, MinLength(16), MaxLength(64)]
        public required string Name { get; set; }

        [Required, MinLength(12), MaxLength(32), EmailAddress]
        public required string Email { get; set; }

        [Required, MaxLength(64)]
        public required string Password { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "UserTypeId debe ser un valor positivo.")]
        public required int UserTypeId { get; set; }

        public UserType UserType { get; set; }

        public ICollection<Activity> Activities { get; set; }

        public bool VerifyPassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }

        public string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
