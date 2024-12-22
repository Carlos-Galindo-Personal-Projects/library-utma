namespace library_utma_backend.DTO.Books
{
    public class BooksSummaryResponseDTO
    {
        public required List<BooksSummaryDTO> Books { get; set; }
        public required bool HasMore { get; set; }
    }
}
