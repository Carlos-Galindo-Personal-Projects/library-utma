namespace library_utma_backend.DTO.Activities
{
    public class ActivityRecordDTO
    {
        public int Id { get; set; }
        public required string StudentId { get; set; }
        public required string StudentName { get; set; }
        public required string Description { get; set; }
        public required DateTime InitialHour { get; set; }
        public DateTime? FinalHour { get; set; }
        public required bool InsideLibrary { get; set; }
    }
}
