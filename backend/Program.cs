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
using System.Diagnostics;
using backend;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

using Microsoft.Extensions.Options;
using Google.Protobuf.WellKnownTypes;

var builder = WebApplication.CreateBuilder(args);

DotNetEnv.Env.Load();



var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");

if (string.IsNullOrEmpty(connectionString))
{
    throw new InvalidOperationException("CONNECTION_STRING environment variable is not set.");
}

// Rejestracja ApplicationDbContext z użyciem PostgreSQL (Supabase)
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));


builder.Services.AddControllersWithViews();
builder.Services.AddIdentity<AppUser, IdentityRole>( options =>
    {
        options.Password.RequiredUniqueChars = 0;
        options.Password.RequireUppercase = false;
        options.Password.RequiredLength = 8; 
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireLowercase = false; 
    }
).AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});


var app = builder.Build();


await CheckDatabaseConnectionAsync(connectionString);

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Użyj routingu
app.UseRouting();


app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowAll");


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
