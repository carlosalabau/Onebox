import { Component, Input, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import {
  EventDetail,
  SessionsEvent,
} from '../../shared/models/item-event.interface';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.scss'],
})
export class EventTicketComponent implements OnInit {
  @Input('id') eventId!: string;

  session: any = null;
  cart: any = this.billboardService.cart.getValue();

  constructor(private billboardService: BillboardService) {}

  ngOnInit() {
    if (this.session == null) {
      this.billboardService
        .getEvent(this.eventId)
        .subscribe((evt: EventDetail) => {
          evt.sessions = evt.sessions.map((element: any) => {
            return {
              ...element,
              id: evt.event.id,
              tickets: 0,
              title: evt.event.title,
            };
          });

          this.session = evt;
          this.billboardService.event.next(evt);
          this.billboardService.setEvent();
        });
    }
  }

  manageItemCart(id: string, date: Date, type: string) {
    this.session.sessions.map((evt: SessionsEvent) => {
      if (evt.id == id && evt.date == date) {
        if (type === 'add' && evt.tickets < Number(evt.availability)) {
          evt.tickets++;
        } else if (type === 'minus' && evt.tickets > 0) {
          evt.tickets--;
        }
        this.billboardService.addCart(evt);
      }
      return evt;
    });
  }
}
