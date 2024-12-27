using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Loans
{
    public class LoanRequestDTO
    {

        [Required(ErrorMessage = "La matrícula del estudiante es requerida")]
        [StringLength(11, ErrorMessage = "La matrícula del estudiante debe tener 11 caracteres"]
        public required string StudentId { get; set; }

        [Required(ErrorMessage = "El ISBN del libro es requerido")]
        [StringLength(17, ErrorMessage = "El ISBN del libro debe tener 17 caracteres")]
        public required string BookIsbn { get; set; }
    }
}
