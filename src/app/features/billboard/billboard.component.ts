import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import { ItemEvent } from '../../shared/models/item-event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrl: './billboard.component.scss',
})
export class BillboardComponent implements OnInit {
  constructor(
    private billboardService: BillboardService,
    private router: Router
  ) {}

  events: any;

  ngOnInit(): void {
    this.billboardService.getEvents().subscribe((evts: ItemEvent[]) => {
      this.events = evts;
    });
  }

  redirectEvent(id: string) {
    this.billboardService.getEvent(id).subscribe((evt) => {
      this.billboardService.event.next(evt);
      this.router.navigateByUrl(`event/${id}`);
    });
  }
}
