using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Book
    {
        [Key, StringLength(13), Required]
        public required string ISBN { get; set; }

        [Required, MaxLength(128)]
        public required string Title { get; set; }

        [Required, MaxLength(64)]
        public required string Author { get; set; }

        [Required, MaxLength(32)]
        public required string Genre { get; set; }

        [Required, Range(1900, int.MaxValue, ErrorMessage = "Year debe ser un valor positivo.")]
        public required int Year { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "Amount debe ser un valor positivo.")]
        public required int Amount { get; set; }

        public ICollection<Loan> Loans { get; set; }
    }
}
