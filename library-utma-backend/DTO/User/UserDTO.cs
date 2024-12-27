using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.User
{
    public class UserDTO
    {
        [Required(ErrorMessage = "El correo es requerido")]
        [EmailAddress(ErrorMessage = "El correo no es válido")]
        [MinLength(16, ErrorMessage = "El correo debe tener al menos 16 caracteres")]
        [MaxLength(32, ErrorMessage = "El correo debe tener máximo 32 caracteres")]
        public required string Email { get; set; }

        [Required(ErrorMessage = "La contraseña es obligatoria")]
        [MinLength(6, ErrorMessage = "La contraseña debe tener al menos 6 caracteres")]
        [MaxLength(15, ErrorMessage = "La contraseña debe tener máximo 15 caracteres")]
        public required string Password { get; set; }
    }
}
