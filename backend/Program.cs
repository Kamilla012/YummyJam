using System;
using System.Threading.Tasks;
using Supabase;
using DotNetEnv;

class Program
{
    static async Task Main(string[] args)
    {
        Env.Load();
    
        var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
        var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

        // Ustaw opcje Supabase
        var options = new Supabase.SupabaseOptions
        {
            AutoConnectRealtime = true
        };

        // Utwórz klienta Supabase
        var supabase = new Supabase.Client(url, key, options);

        // Zainicjalizuj połączenie
        await supabase.InitializeAsync();

        Console.WriteLine("Połączenie z Supabase zostało nawiązane.");

        // Tutaj możesz dodawać dalsze operacje, np. zapytania do bazy danych Supabase
    }
}
