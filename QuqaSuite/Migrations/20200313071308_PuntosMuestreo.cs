using Microsoft.EntityFrameworkCore.Migrations;

namespace QuqaSuite.Migrations
{
    public partial class PuntosMuestreo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Arboles_FotografiaArboles_fotografiaArbolId",
                table: "Arboles");

            migrationBuilder.RenameColumn(
                name: "fotografiaArbolId",
                table: "Arboles",
                newName: "FotografiaArbolId");

            migrationBuilder.RenameIndex(
                name: "IX_Arboles_fotografiaArbolId",
                table: "Arboles",
                newName: "IX_Arboles_FotografiaArbolId");

            migrationBuilder.CreateTable(
                name: "PuntosMuestreo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Numero = table.Column<int>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    EstudioId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PuntosMuestreo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PuntosMuestreo_Estudios_EstudioId",
                        column: x => x.EstudioId,
                        principalTable: "Estudios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PuntosMuestreo_EstudioId",
                table: "PuntosMuestreo",
                column: "EstudioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Arboles_FotografiaArboles_FotografiaArbolId",
                table: "Arboles",
                column: "FotografiaArbolId",
                principalTable: "FotografiaArboles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Arboles_FotografiaArboles_FotografiaArbolId",
                table: "Arboles");

            migrationBuilder.DropTable(
                name: "PuntosMuestreo");

            migrationBuilder.RenameColumn(
                name: "FotografiaArbolId",
                table: "Arboles",
                newName: "fotografiaArbolId");

            migrationBuilder.RenameIndex(
                name: "IX_Arboles_FotografiaArbolId",
                table: "Arboles",
                newName: "IX_Arboles_fotografiaArbolId");

            migrationBuilder.AddForeignKey(
                name: "FK_Arboles_FotografiaArboles_fotografiaArbolId",
                table: "Arboles",
                column: "fotografiaArbolId",
                principalTable: "FotografiaArboles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
