using library_utma_backend.DTO.Books;

namespace library_utma_backend.DTO.Forms
{
    public class FormResponseDTO
    {
        public required BookResponseDTO Book { get; set; }
        public required List<GenresResponseDTO> Genres { get; set; }
    }
}

