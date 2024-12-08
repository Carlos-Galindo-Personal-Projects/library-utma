using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO
{
    public class LoanRequestDTO
    {

        [Required, StringLength(11, MinimumLength = 11)]
        public required string StudentId { get; set; }

        [Required, StringLength(13)]
        public required string BookISBN { get; set; }
    }
}
