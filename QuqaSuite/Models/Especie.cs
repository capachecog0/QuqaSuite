using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Models
{
    public class Especie
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string NombreComun { get; set; }
        [MaxLength(200)]
        public string NombreCientifico { get; set; }
        [MaxLength(1024)]
        public string FormulaBiomasa { get; set; }
    }
}
