using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO
{
    public class LoanSummaryDTO
    {
        public required int Id { get; set; }

        [Required, StringLength(11)]
        public required string StudentId { get; set; }

        [Required, MinLength(16), MaxLength(64)]
        public required string StudentName { get; set; }

        [Required, StringLength(13)]
        public required string BookISBN { get; set; }

        [Required, MaxLength(128)]
        public required string BookName { get; set; }

        [Required]
        public required DateTime LoanDate { get; set; }
    }
}
