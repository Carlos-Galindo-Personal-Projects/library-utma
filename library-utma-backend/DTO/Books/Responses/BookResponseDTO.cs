namespace library_utma_backend.DTO.Books.Responses
{
    public class BookResponseDTO : BookResDTO
    {
        public required int GenreId { get; set; }
        public required string Author { get; set; }
        public required int Year { get; set; }
        public required int Amount { get; set; }
    }
}
