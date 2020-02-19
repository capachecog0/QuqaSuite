using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Models
{
    public class Estudio
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public String NombreEstudio { get; set; }

        [MaxLength(200)]
        public String Descripcion { get; set; }

        public ICollection<Arbol> Especimenes { get; set; } = new List<Arbol>();

        public Estudio(string nombreEstudio)
        {
            NombreEstudio = nombreEstudio;
        }        
        
    }

    public class EstudioView : Estudio
    {
        public int NumeroEspecimenes { get; }

        public EstudioView(Estudio estudio, int numeroEspecimenes): base(estudio.NombreEstudio)
        {
            this.Id = estudio.Id;
            this.NombreEstudio = estudio.NombreEstudio;
            this.Descripcion = estudio.Descripcion;
            this.NumeroEspecimenes = numeroEspecimenes;
        }
    }
}
