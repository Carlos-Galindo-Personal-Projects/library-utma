namespace library_utma_backend.DTO.Activities
{
    public class ActivitiesRecordResponseDTO
    {
        public required List<ActivityRecordDTO> Activities { get; set; }
        public required bool HasMore { get; set; }
    }
}
