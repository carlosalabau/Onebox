import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrl: './billboard.component.scss'
})
export class BillboardComponent implements OnInit {

  constructor(private billboardService: BillboardService) { }

  events: any;

  ngOnInit(): void {
    this.billboardService.getEvents().subscribe(evts => {
      this.events = evts
    })
  }

  convertDate(str: string) {
    const date = parseInt(str)
    return new Date(date).toLocaleDateString()
  }
}
