using ContactManagerApi.Application.DTOs;
using Microsoft.AspNetCore.Identity; 

namespace ContactManagerApi.Application.Interfaces
{
    public interface IAccountService
    {
        Task<IdentityResult> RegisterAsync(RegisterRequest model); 
        Task<string> LoginAsync(LoginRequest model);
        Task LogoutAsync();
    }
}
