import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './input/input.component';
import { BusComponent } from './bus/bus.component';
import { BusItemComponent } from './bus-item/bus-item.component';
import { DataService } from './data.service';
import { DeckComponent } from './deck/deck.component';
import { ProceedComponent } from './proceed/proceed.component';
import { CustomDirective } from './custom.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketBookingComponent,
    MainComponent,
    InputComponent,
    BusComponent,
    BusItemComponent,
    DeckComponent,
    ProceedComponent,
    CustomDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
