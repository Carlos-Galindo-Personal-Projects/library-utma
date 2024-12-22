using System.ComponentModel.DataAnnotations;
using Microsoft.Build.Framework;
using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;

namespace library_utma_backend.DTO.Books
{
    public class BookRequestDTO
    {
        [StringLength(17), Required]
        public required string ISBN { get; set; }

        [Required(ErrorMessage = "El título es requerido"), MaxLength(128)]
        public required string Title { get; set; }

        [Required(ErrorMessage = "El autor es requerido"), MaxLength(64)]
        public required string Author { get; set; }

        [Required(ErrorMessage = "El género es requerido")]
        public required int GenreId { get; set; }

        [Required(ErrorMessage = "El año es requerido"), Range(1900, int.MaxValue, ErrorMessage = "Year debe ser un valor positivo.")]
        public required int Year { get; set; }

        [Required(ErrorMessage = "La cantidad es requerida"), Range(1, int.MaxValue, ErrorMessage = "Amount debe ser un valor positivo.")]
        public required int Amount { get; set; }
    }
}
