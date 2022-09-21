import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  customerId: string = '';
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  };
  constructor(
    private CustomerService: CustomersService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = this.actRoute.snapshot.params['id'];
    console.log(this.customerId);
    this.CustomerService.getCustomerById(this.customerId).subscribe(
      (customer) => {
        this.customer = customer;
      }
    );
  }
}
