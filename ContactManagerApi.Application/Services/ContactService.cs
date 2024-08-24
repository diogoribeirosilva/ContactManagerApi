using ContactManagerApi.Application.DTOs;
using ContactManagerApi.Application.Interfaces;
using ContactManagerApi.Domain.Entities;
using ContactManagerApi.Domain.Interfaces;

namespace ContactManagerApi.Application.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _repository;

        public ContactService(IContactRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<ContactDto>> GetContactsAsync()
        {
            var contacts = await _repository.GetAllContactsAsync();
            return contacts.Select(c => new ContactDto
            {
                Id = c.Id,
                Name = c.Name,
                PhoneNumber = c.PhoneNumber
            }).ToList();
        }

        public async Task AddContactAsync(ContactDto contactDto)
        {
            var contact = new Contact
            {
                Name = contactDto.Name,
                PhoneNumber = contactDto.PhoneNumber
            };

            await _repository.AddContactAsync(contact);
        }

        public async Task UpdateContactAsync(ContactDto contactDto)
        {
            var contact = new Contact
            {
                Id = contactDto.Id,
                Name = contactDto.Name,
                PhoneNumber = contactDto.PhoneNumber
            };

            await _repository.UpdateContactAsync(contact);
        }

        public async Task DeleteContactAsync(int id)
        {
            await _repository.DeleteContactAsync(id);
        }
    }

}
