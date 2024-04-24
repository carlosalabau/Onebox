import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ItemEvent } from '../../shared/models/item-event.interface';

@Injectable({
  providedIn: 'root',
})
export class BillboardService {
  event = new BehaviorSubject({});
  cart = new BehaviorSubject({});

  constructor(private httpClient: HttpClient) {}

  getEvents() {
    return this.httpClient.get<any[]>('../../../assets/data/events.json').pipe(
      map((data: ItemEvent[]) => {
        return data.sort((a: any, b: any) => a.endDate - b.endDate);
      })
    );
  }

  getEvent(id: string) {
    return this.httpClient.get(`../../../assets/data/event-info-${id}.json`);
  }
}
