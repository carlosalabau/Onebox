import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor(private httpClient: HttpClient) { }

  getEvents(){
    return this.httpClient.get<any[]>("../../../assets/data/events.json").pipe(
      map(data => {
        return data.sort((a,b) => a.endDate - b.endDate)
      })
    )
  }
}
