import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import {
  ItemsCart,
  SessionsEvent,
} from '../../shared/models/item-event.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart = this.billboardService.cart.getValue();
  events: any | null = null;
  constructor(private billboardService: BillboardService) {}

  ngOnInit(): void {
    this.generateEventsArray();
  }
  showEvents() {
    const eventsById: any[] = [];

    this.cart.forEach((event) => {
      if (!eventsById[event.title]) {
        eventsById[event.title] = [];
      }
      if (event) {
        eventsById[event.title].push({ ...event });
      }
    });
    return eventsById;
  }

  generateEventsArray() {
    const eventsByTitle = this.showEvents();

    this.events = Object.keys(eventsByTitle).map((title: any) => {
      return {
        title: title,
        events: eventsByTitle[title].map((event: SessionsEvent) => ({
          ...event,
        })),
      };
    });
  }

  removeItem(evt: SessionsEvent) {
    this.events.forEach((item: ItemsCart) => {
      item.events.map((event: SessionsEvent) => {
        if (event.date == evt.date && evt.tickets > 0) {
          event.tickets--;
          this.billboardService.addCart(event);
        }
      });
    });
  }
}
