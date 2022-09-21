import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, DocumentReference, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef = collection(this.fireStore, 'Customers');
  constructor(private fireStore: Firestore) {}
  addCustomer(customer: Customer): Promise<DocumentReference<Customer>> {
    return addDoc(this.customersRef, customer) as Promise<DocumentReference<Customer>>;
  }

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<
    Customer[]
    >;
  }
  getCustomerById(id:string):Observable<Customer>{
    const customerRef=doc(this.fireStore,`Customers/${id}`)
    return docData(customerRef,{idField:'id'}) as Observable<Customer>;
  }

  updateCustomer(customer:Customer): Promise<void>{
    const customerRef=doc(this.fireStore,`Customers/${customer.id}`);
    return setDoc(customerRef,customer) as Promise<void>
  }
  deleteBook(customer:Customer):Promise<void>{
    const bookRef=doc(this.fireStore,`Customers/${customer.id}`)
    return deleteDoc(bookRef) as Promise<void>
  }
}
