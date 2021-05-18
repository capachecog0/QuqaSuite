using Microsoft.EntityFrameworkCore.Migrations;

namespace QuqaSuite.Migrations
{
    public partial class Extra : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "SuperficieTotal",
                table: "Estudios",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SuperficieTotal",
                table: "Estudios");
        }
    }
}
