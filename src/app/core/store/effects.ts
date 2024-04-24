import { Injectable } from "@angular/core";
import { BillboardService } from "../../features/services/billboard.service";
import { ItemEvent } from "../../shared/models/item-event.model";
import { map, switchMap } from "rxjs";
import { getEventsSuccess } from "./actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class EventsEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly billboardService: BillboardService) {
    }

    getEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Event Component] Get'),
            switchMap(() => this.billboardService.getEvents()),
            map((events: ItemEvent[]) => getEventsSuccess({ events }))
        )
    );

}