using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactManagerApi.Infrastructure.Configuration
{
    public static class IdentityServerConfiguration
    {
        public static IEnumerable<ApiScope> GetApiScopes()
        {
            return new List<ApiScope> { new ApiScope("contactmanagerapi", "Contact Manager API") };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
        {
            new Client
            {
                ClientId = "angular_client",
                AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                ClientSecrets = { new Secret("secret".Sha256()) },
                AllowedScopes = { "contactmanagerapi", "openid", "profile" }
            }
        };
        }
    }
}
