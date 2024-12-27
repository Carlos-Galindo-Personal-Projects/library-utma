using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Books.Requests
{
    public class BookUpdateRequestDTO : BookReqDTO
    {
        [Required(ErrorMessage = "El autor es requerido")]
        [MaxLength(64, ErrorMessage = "El autor debe tener menos de 64 caracteres")]
        public required string Author { get; set; }

        [Required(ErrorMessage = "El id del género es requerido")]
        [Range(1, int.MaxValue, ErrorMessage = "El id del género debe ser un valor positivo.")]
        public required int GenreId { get; set; }

        [Required(ErrorMessage = "El año es requerido")]
        [Range(1900, int.MaxValue, ErrorMessage = "El año debe ser un valor positivo mayor a 1900.")]
        public required int Year { get; set; }

        [Required(ErrorMessage = "La cantidad es requerida")]
        [Range(1, int.MaxValue, ErrorMessage = "La cantidad debe ser un valor positivo.")]
        public required int Amount { get; set; }
    }
}
