using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace backend.Models
{
   
    public class AppUser : IdentityUser
{
    public string Fname { get; set; }
    public string Lname { get; set; }
}

}