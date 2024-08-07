using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using backend.Models;
using Npgsql;
using System;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Odczytaj dane połączenia z pliku konfiguracyjnego
var connectionString = "Host=aws-0-eu-central-1.pooler.supabase.com;Database=postgres;Username=postgres.mocsaghwlpcsjdrfjkqx;Password=KWAkwaKWA555!";

// Dodaj DbContext i skonfiguruj używanie PostgreSQL
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// Dodaj usługi kontrolerów
builder.Services.AddControllers();

var app = builder.Build();

// Sprawdź połączenie do bazy danych
await CheckDatabaseConnectionAsync(connectionString);

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Użyj routingu
app.UseRouting();

// Mapuj kontrolery
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();

// Funkcja do sprawdzania połączenia z bazą danych
async Task CheckDatabaseConnectionAsync(string connectionString)
{
    try
    {
        await using (var connection = new NpgsqlConnection(connectionString))
        {
            await connection.OpenAsync();
            Console.WriteLine("Database connection successful!");
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Database connection failed: {ex.Message}");
        Environment.Exit(1); // Zakończ aplikację, jeśli połączenie nie powiedzie się
    }
}
