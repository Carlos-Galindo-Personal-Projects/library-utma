using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Books
{
    public class BookReqDTO
    {
        [Required(ErrorMessage = "Título es requerido")]
        [MaxLength(128, ErrorMessage = "Título debe tener menos de 128 caracteres")]
        public required string Title { get; set; }
    }
}
