using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Loan
    {
        public int Id { get; set; }

        [Required, StringLength(11, MinimumLength = 11)]
        public required string StudentId { get; set; }

        [Required, StringLength(17)]
        public required string BookISBN { get; set; }

        [Required]
        public required bool IsReturned { get; set; }

        [Required]
        public required DateTime LoanDate { get; set; }
        public DateTime? ReturnDate { get; set; }

        public Student Student { get; set; }
        public Book Book { get; set; }
    }
}
