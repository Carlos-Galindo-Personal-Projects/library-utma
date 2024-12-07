using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO
{
    public class RegisterRequestDTO
    {
        [Required, MinLength(32), MaxLength(64)]
        public required string Name { get; set; }
        [Required, MinLength(16), MaxLength(32), EmailAddress]
        public required string Email { get; set; }
        [Required, MinLength(6), MaxLength(15)]
        public required string Password { get; set; }
        [Required]
        public required int UserTypeId { get; set; }
    }
}
