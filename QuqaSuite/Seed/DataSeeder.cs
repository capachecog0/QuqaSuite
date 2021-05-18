using QuqaSuite.Data;
using QuqaSuite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Seed
{
    public class DataSeeder
    {
        private readonly ApplicationDbContext dbContext;

        public DataSeeder(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void Seed()
        {
            //dbContext.Estudios.RemoveRange(dbContext.Estudios);
            //dbContext.SaveChanges();

            //dbContext.Estudios.AddRange(
              //  new Estudio("Achumani") { Descripcion = "Muestreo Zona de Achumani", SuperficieTotal = 144.77 },
                //new Estudio("Irpavi") { Descripcion = "Muestreo Zona de Irpavi", SuperficieTotal = 135.74 });

            //dbContext.SaveChanges();
        }
    }
}
