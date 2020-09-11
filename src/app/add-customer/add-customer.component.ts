import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  customerobj:Customer=undefined;
  customerDetails:Customer[]=[];
  // customerDetails:Customer[]=[
  //   new Customer("mathew",8888),
  //   new Customer("vineel",22222)
  // ]
  addCustomer(form:any)
  {
    let data=form.value;
    let customerName=data.customerName;
    let balance=data.balance;
    this.customerDetails.push(new Customer(customerName,balance));
    this.customerobj=new Customer(customerName,balance);
    console.log("customers added");
}




}

