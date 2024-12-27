using Microsoft.VisualStudio.Web.CodeGeneration.Utils;

namespace library_utma_backend.DTO.Loans
{
    public class LoansSummaryResponseDTO
    {
        public required List<LoanSummaryDTO> Loans { get; set; }
        public required bool HasMore { get; set; }
    }
}
