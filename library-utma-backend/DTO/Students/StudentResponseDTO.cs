using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO.Students
{
    public class StudentResponseDTO
    {
        public required string Id { get; set; }
        public required string Name { get; set; }
    }
}
