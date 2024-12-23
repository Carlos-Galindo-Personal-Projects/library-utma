using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Loans
{
    public class LoanRequestDTO
    {

        [Required, StringLength(11, MinimumLength = 11)]
        public required string StudentId { get; set; }

        [Required, StringLength(17)]
        public required string BookIsbn { get; set; }
    }
}
