import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomsComponent} from './components/rooms/rooms.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './components/employees/employees.component';
import {ReservationsComponent} from './components/reservations/reservations.component';


const routes: Routes = [
  {path: "rooms", component: RoomsComponent},
  {path: "reservations", component: ReservationsComponent},
  {path: "employer-manager", component: EmployeesComponent},
  {path: "", component: HomeComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
