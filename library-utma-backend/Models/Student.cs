using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.Models
{
    public class Student
    {
        [StringLength(11, MinimumLength = 11)]
        public required string Id { get; set; }

        [Required, MinLength(16), MaxLength(64)]
        public required string Name { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "CareerId debe ser un valor positivo.")]
        public required int CareerId { get; set; }

        public Career Career { get; set; }

        public ICollection<Activity> Activities { get; set; }
        public ICollection<Loan> Loans { get; set; }
    }
}
