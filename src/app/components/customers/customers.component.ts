import { Router } from '@angular/router';
import { EditCustomerComponent } from './../edit-customer/edit-customer.component';
import { Customer } from './../../interfaces/Customer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customLastName:string='';
  customFirstName:string=''
  customPhone:string=''
 

  constructor(
    private CustomerService: CustomersService,
    private modal: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CustomerService.getCustomers().subscribe(
      (customersData: Customer[]) => {
        this.customers = customersData;
      }
    );
  }
  addCustomer(): void {
    const modalRef = this.modal.open(AddCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }
  updateCustomer(customer: Customer) {
    const modalRef = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

  deleteCustomer(customer: Customer): void {
    if (confirm('Are you sure?')) {
      this.CustomerService.deleteBook(customer)
        .then(() => {
          alert('book deleted successfully');
        })
        .catch((err) => console.log(err));
    }
  }
  showCustomer(id: string) {
    this.router.navigateByUrl(`/container/customers/${id}`);
  }
}
