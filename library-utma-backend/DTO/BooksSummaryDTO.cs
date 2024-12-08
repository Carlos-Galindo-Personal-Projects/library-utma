namespace library_utma_backend.DTO
{
    public class BooksSummaryDTO
    {
        public required string ISBN { get; set; }
        public required string Title { get; set; }
        public required string Author { get; set; }
        public required string Genre { get; set; }
        public required int Year { get; set; }
        public required int Amount { get; set; }
    }
}
