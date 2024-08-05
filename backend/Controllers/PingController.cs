using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PingController : ControllerBase
    {
        [HttpGet("/")]
        public IActionResult Ping()
        {
            return Ok(new { message = "API is up and running" });
        }
    }
}