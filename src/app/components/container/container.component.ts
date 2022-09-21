import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  template: `<router-outlet
    (showCustomerClicked)="showCustomerClickedHandler($event)"
  ></router-outlet>`,
})
export class ContainerComponent implements OnInit {
  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor() {}

  ngOnInit(): void {
    // let docWidth = document.documentElement.offsetWidth;
    // [].forEach.call(document.querySelectorAll('*'), function (el: any) {
    //   if (el.offsetWidth > docWidth) {
    //     console.log(el);
    //   }
    // });
  }
  showCustomerClickedHandler(customer: Customer): void {
    this.customer = customer;
    console.log(this.customer + 'pp');
  }
}
