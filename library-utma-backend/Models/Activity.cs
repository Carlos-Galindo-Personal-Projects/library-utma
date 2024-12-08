using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Activity
    {
        public int Id { get; set; }

        [Required]
        public required string StudentId { get; set; }

        [Required, MinLength(8), MaxLength(256)]
        public required string Description { get; set; }

        [Required]
        public required bool InsideLibrary { get; set; }

        [Required]
        public required DateTime InitialHour { get; set; }

        public DateTime? FinalHour { get; set; }

        [Required]
        public required int CapturistId { get; set; }

        public User Capturist { get; set; }

        public Student Student { get; set; }
    }
}
