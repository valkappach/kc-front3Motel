import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { EmployeesComponent } from './components/employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule} from '@angular/forms';
import {GooglePayButtonModule} from '@google-pay/button-angular';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RoomsComponent,
    EmployeesComponent,
    ReservationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    GooglePayButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
