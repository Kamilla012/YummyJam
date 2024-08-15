using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using backend.Models;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    public AccountController(UserManager<AppUser> userManager)
    {
        _userManager = userManager;
    }
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(new {errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList() });
        }
        var existingUser = await _userManager.FindByEmailAsync(model.Email);
        if (existingUser != null)
        {
            return BadRequest(new {errors = new List<string> {"Email is already in use." } });
        }
        var user = new AppUser
        {
            UserName = model.Username,
            Email = model.Email,
            Fname = model.Fname,
            Lname = model.Lname
        };


        var result = await _userManager.CreateAsync(user, model.Password);
        Console.WriteLine(result);

    if (result.Succeeded)
    {
        return Ok(new { message = "Registration successful" });
    }

    
    return BadRequest(new { errors = result.Errors.Select(e => e.Description).ToList() });
}
}

