﻿namespace library_utma_backend.DTO.Books
{
    public class BookSelectorRequestDTO
    {
        public required string ISBN { get; set; }
        public required string Title { get; set; }
    }
}
