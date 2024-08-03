var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages(); // Jeśli używasz Razor Pages, pozostaw to
builder.Services.AddControllers(); // Dodaj wsparcie dla kontrolerów API

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000") // Adres Twojej aplikacji frontendowej
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors("AllowFrontend"); // Użyj polityki CORS

app.UseAuthorization();

app.MapRazorPages();
app.MapControllers(); // Mapowanie kontrolerów API

app.Run();
