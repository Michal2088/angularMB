import { CustomersService } from './../../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor(
    private CustomerService: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  addCustomer() {
    this.CustomerService.addCustomer(this.customer)
      .then(() => {
        this.activeModal.close();
        alert('Successfully added customer');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  cancel() {
    this.activeModal.close();
  }
}
