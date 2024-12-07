using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Student
    {
        [Required]
        [StringLength(11, MinimumLength = 11)]
        public required string Id { get; set; }

        [Required, MinLength(16), MaxLength(64)]
        public required string Name { get; set; }

        [Required]
        public required int CareerId { get; set; }

        public Career Career { get; set; }

        public ICollection<Activity> Activities { get; set; }
    }
}
