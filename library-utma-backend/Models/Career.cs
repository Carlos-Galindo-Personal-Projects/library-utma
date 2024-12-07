using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Career
    {
        public int Id { get; set; }

        [Required, MinLength(4), MaxLength(8)]
        public required string Name { get; set; }

        [Required, MinLength(24), MaxLength(128)]
        public required string Description { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
