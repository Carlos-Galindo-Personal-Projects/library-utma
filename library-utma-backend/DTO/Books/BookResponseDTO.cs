﻿namespace library_utma_backend.DTO.Books
{
    public class BookResponseDTO
    {
        public required string ISBN { get; set; }
        public required string Title { get; set; }
        public required string Author { get; set; }
        public required int GenreId { get; set; }
        public required int Year { get; set; }
        public required int Amount { get; set; }
    }
}
