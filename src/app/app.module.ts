import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillboardComponent } from './features/billboard/billboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventTicketComponent } from './features/event-ticket/event-ticket.component';
import { DatePipe } from './shared/pipes/date.pipe';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './features/header/header.component';
import { CartComponent } from './features/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BillboardComponent,
    EventTicketComponent,
    DatePipe,
    HeaderComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
