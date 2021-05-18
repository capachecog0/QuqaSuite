using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuqaSuite.Data;
using QuqaSuite.Models;

namespace QuqaSuite.Controllers
{
    [Route("api/estudios/{estudioId}/puntos/{puntoId}/[controller]")]
    [ApiController]
    public class ArbolesController : ControllerBase
    {
        private ApplicationDbContext context;

        public ArbolesController(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET: api/Arboles
        [HttpGet]
        public IEnumerable<string> Get(int estudioId)
        {
            return new string[] { "value1", "value2", estudioId.ToString() };
        }

        // GET: api/Arboles/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int estudioId, int id)
        {
            return "value";
        }

        // POST: api/Arboles
        [HttpPost]
        public async Task<ActionResult<Arbol>> Post(int estudioId, int puntoId, [FromBody] Arbol arbol)
        {
            var punto = await context.PuntosMuestreo.FindAsync(puntoId);
            punto.Especimenes.Add(arbol);
            
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = arbol.Id }, arbol);
        }

        // PUT: api/Arboles/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
