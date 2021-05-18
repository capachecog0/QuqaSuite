using Microsoft.EntityFrameworkCore.Migrations;

namespace QuqaSuite.Migrations
{
    public partial class PuntosArbol : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Arboles_Estudios_EstudioId",
                table: "Arboles");

            migrationBuilder.DropIndex(
                name: "IX_Arboles_EstudioId",
                table: "Arboles");

            migrationBuilder.DropColumn(
                name: "EstudioId",
                table: "Arboles");

            migrationBuilder.AddColumn<int>(
                name: "PuntoMuestreoId",
                table: "Arboles",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Arboles_PuntoMuestreoId",
                table: "Arboles",
                column: "PuntoMuestreoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Arboles_PuntosMuestreo_PuntoMuestreoId",
                table: "Arboles",
                column: "PuntoMuestreoId",
                principalTable: "PuntosMuestreo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Arboles_PuntosMuestreo_PuntoMuestreoId",
                table: "Arboles");

            migrationBuilder.DropIndex(
                name: "IX_Arboles_PuntoMuestreoId",
                table: "Arboles");

            migrationBuilder.DropColumn(
                name: "PuntoMuestreoId",
                table: "Arboles");

            migrationBuilder.AddColumn<int>(
                name: "EstudioId",
                table: "Arboles",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Arboles_EstudioId",
                table: "Arboles",
                column: "EstudioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Arboles_Estudios_EstudioId",
                table: "Arboles",
                column: "EstudioId",
                principalTable: "Estudios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
