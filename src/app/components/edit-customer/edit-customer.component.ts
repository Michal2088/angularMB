import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  @Input() id?: string;
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

  ngOnInit(): void {
    if (this.id) {
      this.CustomerService.getCustomerById(this.id).subscribe(
        (customerData: Customer) => {
          this.customer = customerData;
        }
      );
    }
  }

  updateCustomer(): void {
    this.CustomerService.updateCustomer(this.customer)
      .then(() => {
        this.activeModal.close();
        alert('customer updated successfully');
      })
      .catch((err) => console.log(err));
  }
  cancel() {
    this.activeModal.close();
  }
}
