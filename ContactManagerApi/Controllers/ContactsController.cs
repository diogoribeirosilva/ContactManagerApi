using ContactManagerApi.Application.DTOs;
using ContactManagerApi.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ContactManagerApi.Controllers
{
   // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public async Task<IActionResult> GetContacts() => Ok(await _contactService.GetContactsAsync());

        [HttpPost]
        public async Task<IActionResult> AddContact([FromBody] ContactDto contactDto)
        {
            await _contactService.AddContactAsync(contactDto);
            return CreatedAtAction(nameof(GetContacts), contactDto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(int id, [FromBody] ContactDto contactDto)
        {
            if (id != contactDto.Id) return BadRequest();

            await _contactService.UpdateContactAsync(contactDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            await _contactService.DeleteContactAsync(id);
            return NoContent();
        }
    }
}
