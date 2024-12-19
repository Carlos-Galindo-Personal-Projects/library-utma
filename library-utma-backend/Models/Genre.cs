using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Genre
    {
        public int Id { get; set; }

        [Required, MinLength(4), MaxLength(32)]
        public required string Name { get; set; }

        public ICollection<Book> Books { get; set; }
    }
}
