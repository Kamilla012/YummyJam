namespace backend.Models
{
    public class User
    {
        public int Id {get; set;}
        public string Fname {get; set;} = string.Empty;
        public string Lname {get; set;} = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }
}