using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;

namespace ProEventos.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) // esse base vai jogar o options para o DbContext
        {}
        
        public DbSet<Evento> Eventos { get; set; }
    }
}