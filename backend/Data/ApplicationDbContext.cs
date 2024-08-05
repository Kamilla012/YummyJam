// using Microsoft.EntityFrameworkCore;
// using LoginRegistrationApp.Models;

// namespace LoginRegistrationApp.Data
// {
//     public class ApplicationDbContext : DbContext
//     {
//         public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
//             : base(options)
//         {
//         }

//         public DbSet<User> Users { get; set; }
//     }
// }

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data 
{
    public class ApplicationDbContext : DbContext
    {
       public ApplicationDbContext(DbContextOptions dbContextOptions)
       : base(dbContextOptions)
       {
        
       } 
       public DbSet<User> Users {get; set;}
       
    }
}