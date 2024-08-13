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
            return BadRequest(ModelState);
        }
        var user = new AppUser
        {
            UserName = model.Username,
            Email = model.Email,
            Fname = model.FirstName,
            Lname = model.LastName
        };
        var result = await _userManager.CreateAsync(user, model.Password);
         if (result.Succeeded)
        {
            return Ok(new { message = "Registration successful" });
        }
         foreach (var error in result.Errors)
        {
            ModelState.AddModelError(string.Empty, error.Description);
        }

        return BadRequest(ModelState);
    }
}

public class RegisterModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}