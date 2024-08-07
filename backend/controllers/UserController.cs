using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("/login")]
        public IActionResult User()
        {
            return Ok(new { message = "API is up and running!!!!" });
        }
    }
}