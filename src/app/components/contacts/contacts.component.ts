import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 contacts:Contact[]=[]
 contactName:string=''
  constructor(private ConService:ContactsService) { }

  ngOnInit(): void {
    this.contacts=this.ConService.getAll()
  }


}
