using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class UserType
    {
        public int Id { get; set; }
        [Required, MinLength(8), MaxLength(32)]
        public required string Name { get; set; }

        [Required, MaxLength(128)]
        public required string Description { get; set; }

        public required ICollection<User> Users { get; set; }
    }
}
