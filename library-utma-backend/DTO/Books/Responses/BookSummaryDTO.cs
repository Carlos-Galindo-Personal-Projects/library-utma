namespace library_utma_backend.DTO.Books.Responses
{
    public class BookSummaryDTO : BookResDTO
    {
        public required string Genre { get; set; }
        public required string Author { get; set; }
        public required int Year { get; set; }
        public required int Amount { get; set; }
    }
}
