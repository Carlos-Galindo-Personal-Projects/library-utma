using library_utma_backend.DTO.Genres;

namespace library_utma_backend.DTO.Books.Responses
{
    public class FormResponseDTO
    {
        public required BookResponseDTO Book { get; set; }
        public required List<GenresResponseDTO> Genres { get; set; }
    }
}

