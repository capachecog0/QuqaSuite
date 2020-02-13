using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Models
{
    public class Estudio
    {
        public int Id { get; set; }
        public String NombreEstudio { get; set; }
        public String? Descripcion { get; set; }

        public Estudio(string nombreEstudio)
        {
            NombreEstudio = nombreEstudio;
        }
    }
}
