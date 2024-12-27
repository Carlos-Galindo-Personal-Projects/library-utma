using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Loans
{
    public class LoanSummaryDTO
    {
        public required int Id { get; set; }
        public required string StudentId { get; set; }
        public required string StudentName { get; set; }
        public required string BookIsbn { get; set; }
        public required string BookName { get; set; }
        public required DateTime LoanDate { get; set; }
    }
}
