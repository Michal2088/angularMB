import { PNFComponent } from './components/pnf/pnf.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { ContainerComponent } from './components/container/container.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'container',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'customers/:id',
        component: ShowCustomerComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: PNFComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
