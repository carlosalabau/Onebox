import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  EventDetail,
  ItemEvent,
  SessionsEvent,
} from '../../shared/models/item-event.interface';

@Injectable({
  providedIn: 'root',
})
export class BillboardService {
  cart = new BehaviorSubject<any[]>([]);
  event = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) {}

  getEvents() {
    return this.httpClient.get<any[]>('../../../assets/data/events.json').pipe(
      map((data: ItemEvent[]) => {
        return data.sort((a: any, b: any) => a.endDate - b.endDate);
      })
    );
  }

  getEvent(id: string): Observable<any> {
    return this.httpClient.get(`../../../assets/data/event-info-${id}.json`);
  }

  setEvent() {
    const cart = this.cart.getValue();
    const event = this.event.getValue().sessions;

    const eventMap: any = {};
    cart.forEach((item: SessionsEvent) => {
      const key = `${item.id}_${item.date}`;
      eventMap[key] = item.tickets;
    });

    event.forEach((item: SessionsEvent) => {
      const key = `${item.id}_${item.date}`;
      if (eventMap.hasOwnProperty(key)) {
        item.tickets = eventMap[key];
      }
    });
  }

  addCart(event: SessionsEvent) {
    const cart = this.cart.getValue();
    const itemFound = cart.findIndex(
      (cartItem) => cartItem.id === event.id && cartItem.date === event.date
    );

    if (itemFound !== -1) {
      cart[itemFound].tickets = event.tickets;
    } else {
      cart.push(event);
    }

    this.cart.next(cart);
  }
}
