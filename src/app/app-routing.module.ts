import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardComponent } from './features/billboard/billboard.component';
import { EventTicketComponent } from './features/event-ticket/event-ticket.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
