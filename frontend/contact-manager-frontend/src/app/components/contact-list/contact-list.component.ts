import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  contacts = [];

  constructor(private contactService: ContactService, private toastr: ToastrService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe(
      contacts => {
        this.contacts = contacts;
      },
      error => {
        this.toastr.error('Failed to load contacts.', 'Error');
      }
    );
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(
      response => {
        this.contacts = this.contacts.filter(c => c.id !== id);
        this.toastr.success('Contact deleted successfully', 'Success');
      },
      error => {
        this.toastr.error('Failed to delete contact.', 'Error');
      }
    );
  }
}
