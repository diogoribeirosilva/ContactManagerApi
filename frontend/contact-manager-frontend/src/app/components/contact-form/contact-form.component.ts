import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contact = { name: '', phoneNumber: '' };
  contactId: string | null = null;

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Captura o ID do contato da rota se estiver editando um contato existente
    this.contactId = this.route.snapshot.paramMap.get('id');
    if (this.contactId) {
      this.loadContact();
    }
  }

  loadContact(): void {
    if (this.contactId) {
      this.contactService.getContact(this.contactId).subscribe(
        (contact) => {
          this.contact = contact;
        },
        (error) => {
          this.toastr.error('Failed to load contact.', 'Error');
        }
      );
    }
  }

  saveContact(): void {
    if (this.contactId) {
      // Editar contato existente
      this.contactService.updateContact(this.contactId, this.contact).subscribe(
        () => {
          this.toastr.success('Contact updated successfully!', 'Success');
          this.router.navigate(['/contacts']);
        },
        (error) => {
          this.toastr.error('Failed to update contact.', 'Error');
        }
      );
    } else {
      // Criar novo contato
      this.contactService.saveContact(this.contact).subscribe(
        () => {
          this.toastr.success('Contact created successfully!', 'Success');
          this.router.navigate(['/contacts']);
        },
        (error) => {
          this.toastr.error('Failed to create contact.', 'Error');
        }
      );
    }
  }
}
