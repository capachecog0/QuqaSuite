using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuqaSuite.Data;
using QuqaSuite.Models;

namespace QuqaSuite.Controllers
{
    [Route("api/estudios/{estudioId}/[controller]")]
    [ApiController]
    public class PuntosController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public PuntosController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<ActionResult<PuntoMuestreo>> Post(int estudioId, [FromBody] PuntoMuestreo punto)
        {
            var estudio = await context.Estudios.Where(e => e.Id == estudioId).Include(e => e.puntosMuestreo).FirstAsync();
            
            var numeroPunto = estudio.puntosMuestreo.Select(p => p.Numero).DefaultIfEmpty(0).Max() + 1;
            punto.Numero = numeroPunto;

            estudio.puntosMuestreo.Add(punto);

            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = punto.Id }, punto);
        }

        private object Get()
        {
            throw new NotImplementedException();
        }
    }
}