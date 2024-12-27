namespace library_utma_backend.DTO.Books.Responses
{
    public class BooksSummaryResponseDTO
    {
        public required List<BookSummaryDTO> Books { get; set; }
        public required bool HasMore { get; set; }
    }
}
