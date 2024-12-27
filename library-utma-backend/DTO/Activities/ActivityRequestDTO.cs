using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Activities
{
    public class ActivityRequestDTO
    {

        [Required(ErrorMessage = "La matrícula del estudiante es requerida.")]
        public required string StudentId { get; set; }

        [Required(ErrorMessage = "El campo Description es requerido.")]
        [MinLength(8, ErrorMessage = "La descripción debe tener al menos 8 caracteres.")]
        [MaxLength(256, ErrorMessage = "La descripción no puede tener más de 256 caracteres.")]
        public required string Description { get; set; }
    }
}