import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import { ItemEvent } from '../../shared/models/item-event.interface';

@Component({
  selector: 'app-event-ticket',
  templateUrl: './event-ticket.component.html',
  styleUrls: ['./event-ticket.component.scss'],
})
export class EventTicketComponent implements OnInit {
  session: any;

  constructor(private billboardService: BillboardService) {}

  ngOnInit() {
    this.session = this.billboardService.event.getValue();
    console.log(this.session);
  }

  addCart(id: string, date: Date) {}
}
