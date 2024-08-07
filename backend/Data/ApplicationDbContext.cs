using Microsoft.EntityFrameworkCore;
using backend.Models; // Importuj przestrzeń nazw zawierającą model User

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    // Definiowanie DbSet dla modeli
    public DbSet<User> Users { get; set; }

    // Opcjonalnie: konfiguracja modelu przy użyciu Fluent API
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Konfiguracje dla modelu User (opcjonalne)
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Fname).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Lname).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(100);
            entity.Property(e => e.PasswordHash).IsRequired();
        });
    }
}