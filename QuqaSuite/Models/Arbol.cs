using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Models
{
    public class Arbol
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Macrodistrito { get; set; }

        [MaxLength(50)]
        public string Distrito { get; set; }

        [MaxLength(50)]
        public string Barrio { get; set; }

        public Especie Especie { get; set; }
        public double Altura { get; set; }
        public double Dap { get; set; }
        public double Biomasa { get; set; }      
        public FotografiaArbol FotografiaArbol { get; set; }
    }
}
