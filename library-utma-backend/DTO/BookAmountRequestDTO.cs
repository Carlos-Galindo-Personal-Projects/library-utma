using System.ComponentModel.DataAnnotations;

namespace library_utma_backend.DTO
{
    public class BookAmountRequestDTO
    {

        [Required, Range(1, int.MaxValue, ErrorMessage = "Amount debe ser un valor positivo.")]
        public required int Amount { get; set; }
    }
}
