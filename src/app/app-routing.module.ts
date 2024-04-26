import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { BillboardComponent } from './features/billboard/billboard.component';
import { EventTicketComponent } from './features/event-ticket/event-ticket.component';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    title: 'billboard',
    component: BillboardComponent,
  },
  {
    path: 'event/:id',
    component: EventTicketComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
