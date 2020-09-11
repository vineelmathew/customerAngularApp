import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import {Reverse} from './pipes/reverse';
import {Length} from './pipes/length';
@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    ListCustomersComponent,
    Reverse,
    Length,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
