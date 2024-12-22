namespace library_utma_backend.DTO.Activities
{
    public class ActiveActivitiesResponseDTO
    {
        public int Id { get; set; }
        public required string StudentId { get; set; }
        public required string StudentName { get; set; }
        public required string Description { get; set; }
        public required DateTime InitialHour { get; set; }
    }
}
