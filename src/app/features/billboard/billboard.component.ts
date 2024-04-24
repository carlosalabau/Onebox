import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../services/billboard.service';
import { Store, select } from '@ngrx/store';
import { OpenEvent } from '../../core/store/actions';
import { selectEventList } from '../../core/store/selectors';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrl: './billboard.component.scss'
})
export class BillboardComponent implements OnInit {

  constructor(
    private billboardService: BillboardService,
    private store: Store
  ) { }

  events: any;
  evento$: any;

  ngOnInit(): void {
    this.billboardService.getEvents().subscribe(evts => {
      this.events = evts
      this.store.dispatch({type: '[Event Component] Get'})
    })
  }

  convertDate(str: string) {
    const date = parseInt(str)
    return new Date(date).toLocaleDateString()
  }

  openEvent(evt: any) {
    console.log(evt)
    this.store.dispatch(OpenEvent(evt))
    this.evento$ = this.store.pipe(select(selectEventList));
    console.log(this.evento$)
  }
}
