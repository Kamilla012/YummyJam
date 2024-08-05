using System;
using System.Threading.Tasks;
using Supabase;
using DotNetEnv;
using backend.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

class Program
{
    static async Task Main(string[] args)
    {
        Env.Load();

        var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
        var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

        var options = new Supabase.SupabaseOptions
        {
            AutoConnectRealtime = true
        };

        var supabase = new Supabase.Client(url, key, options);
        await supabase.InitializeAsync();
        Console.WriteLine("Połączenie z Supabase zostało nawiązane.");

        var host = CreateHostBuilder(args).Build();
        using (var scope = host.Services.CreateScope())
        {
            var services = scope.ServiceProvider;
            var context = services.GetRequiredService<ApplicationDbContext>();
            // Tutaj możesz dodać kod inicjalizacji bazy danych, jeśli potrzebujesz.
        }

        await host.RunAsync();
    }

   static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.ConfigureServices((context, services) =>
            {
                var connectionString = "Host=aws-0-eu-central-1.pooler.supabase.com;Database=postgres;Username=postgres.mocsaghwlpcsjdrfjkqx;Password=KWAkwaKWA555!";

                services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseNpgsql(connectionString));
                
                services.AddSingleton<Supabase.Client>(_ => 
                    new Supabase.Client(
                        Environment.GetEnvironmentVariable("SUPABASE_URL"), 
                        Environment.GetEnvironmentVariable("SUPABASE_KEY"),
                        new Supabase.SupabaseOptions { AutoConnectRealtime = true }));

                services.AddControllers(); // Dodaj kontrolery do DI
            })
            .Configure(app =>
            {
                var env = app.ApplicationServices.GetRequiredService<IHostEnvironment>();

                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }

                app.UseRouting();

                app.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllers(); // Konfiguracja routingu dla kontrolerów
                });
            });
        });
}
