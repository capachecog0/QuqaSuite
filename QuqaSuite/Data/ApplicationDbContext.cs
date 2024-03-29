﻿using QuqaSuite.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuqaSuite.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Estudio> Estudios { get; set; }
        public DbSet<Arbol> Arboles { get; set; }
        public DbSet<Especie> Especies { get; set; }
        public DbSet<FotografiaArbol> FotografiaArboles { get; set; }
        public DbSet<PuntoMuestreo> PuntosMuestreo { get; set; }

    }
}
