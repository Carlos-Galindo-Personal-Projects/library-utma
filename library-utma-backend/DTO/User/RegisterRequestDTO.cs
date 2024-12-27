using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.User
{
    public class RegisterRequestDTO : UserDTO
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        [MinLength(16, ErrorMessage = "El nombre debe tener al menos 16 caracteres")]
        [MaxLength(64, ErrorMessage = "El nombre debe tener máximo 64 caracteres")]
        public required string Name { get; set; }

        [Range(1, 3, ErrorMessage = "El tipo de usuario debe estar entre 1 y 3")]
        [Required(ErrorMessage = "El tipo de usuario es requerido")]
        public required int UserTypeId { get; set; }
    }
}
