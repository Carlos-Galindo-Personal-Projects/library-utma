using Microsoft.EntityFrameworkCore;
using library_utma_backend.Models;

namespace library_utma_backend.Context
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public required DbSet<User> User { get; set; }
        public required DbSet<UserType> UserType { get; set; }
        public required DbSet<Activity> Activity { get; set; }
        public required DbSet<Student> Student { get; set; }
        public required DbSet<Career> Career { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.UserType)
                .WithMany(ut => ut.Users)
                .HasForeignKey(u => u.UserTypeId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Student>()
                .HasOne(s => s.Career)
                .WithMany(c => c.Students)
                .HasForeignKey(s => s.CareerId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Activity>()
                .HasOne(a => a.Student)
                .WithMany(s => s.Activities)
                .HasForeignKey(a => a.StudentId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Activity>()
                .HasOne(a => a.Capturist)
                .WithMany(u => u.Activities)
                .HasForeignKey(a => a.CapturistId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
