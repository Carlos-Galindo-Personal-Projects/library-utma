using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Books
{
    public class BookUpdateRequestDTO
    {

        [Required(ErrorMessage = "Title es requerido.")]
        public required string Title { get; set; }

        [Required(ErrorMessage = "Author es requerido.")]
        public required string Author { get; set; }

        [Required(ErrorMessage = "GenreId es requerido.")]
        public required int GenreId { get; set; }

        [Required(ErrorMessage = "Year es requerido.")]
        public required int Year { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "Amount debe ser un valor positivo.")]
        public required int Amount { get; set; }
    }
}
