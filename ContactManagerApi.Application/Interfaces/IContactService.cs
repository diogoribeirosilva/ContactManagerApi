using ContactManagerApi.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactManagerApi.Application.Interfaces
{
    public interface IContactService
    {
        Task<List<ContactDto>> GetContactsAsync();
        Task AddContactAsync(ContactDto contact);
        Task UpdateContactAsync(ContactDto contact);
        Task DeleteContactAsync(int id);
    }
}
