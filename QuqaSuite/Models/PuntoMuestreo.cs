using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Models
{
    public class PuntoMuestreo
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public string Nombre { get; set; }
        public ICollection<Arbol> Especimenes { get; set; } = new List<Arbol>();

    }
}
