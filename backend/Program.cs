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


        var options = new Supabase.SupabaseOptions
        {
            AutoConnectRealtime = true
        };


        var supabase = new Supabase.Client(url, key, options);

   
        await supabase.InitializeAsync();

        Console.WriteLine("Połączenie z Supabase zostało nawiązane.");

        
    }
}
