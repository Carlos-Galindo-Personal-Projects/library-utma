using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace library_utma_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddInsideLibraryOnActivity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "InsideLibrary",
                table: "Activity",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InsideLibrary",
                table: "Activity");
        }
    }
}
