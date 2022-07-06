import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusItemComponent } from './bus-item/bus-item.component';
import { BusComponent } from './bus/bus.component';
import { DeckComponent } from './deck/deck.component';
import { MainComponent } from './main/main.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

const routes: Routes = [
  {path:'',component:MainComponent},
 {path:'redbus',component:BusComponent, children:[{path:"busTitle",component:BusItemComponent,children:[{path:"deck",component:DeckComponent}]}]},
 {path:'deck',component:DeckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
