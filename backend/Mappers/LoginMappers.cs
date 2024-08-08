using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Mappers
{
    public static class LoginMappers
    {
        public static LoginDto ToLoginDto(this User loginModel)
        {
            return new LoginDto
            {
                Username = loginModel.Email,

            };
        }
    }
}