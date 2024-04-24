import { Component, Input, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import { ItemEvent } from '../../shared/models/item-event.interface';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.scss'],
})
export class EventTicketComponent implements OnInit {
  @Input('id') eventId!: string;

  session: any = null;
  cart: any;

  constructor(private billboardService: BillboardService) {}

  ngOnInit() {
    if (this.session == null) {
      this.billboardService.getEvent(this.eventId).subscribe((evt: any) => {
        evt.sessions = evt.sessions.map((element: any) => {
          return {
            ...element,
            id: evt.event.id,
            tickets: 0,
          };
        });
        this.session = evt;
      });
    }
  }

  manageItemCart(id: string, date: Date, type: string) {
    console.log(id, date, type);
    this.session.sessions.map((evt: any) => {
      if (evt.id == id && evt.date == date) {
        type == 'add' ? evt.tickets++ : evt.tickets--;
      }
      return evt;
    });
  }
}
