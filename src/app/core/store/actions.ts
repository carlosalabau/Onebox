import { createAction, props } from '@ngrx/store';
import { ItemEvent } from '../../shared/models/item-event.model';

export enum ActionTypes {
    GetEvents = '[Event Component] Get',
    OpenEvent = '[Event Component] Open',
    CloseEvent = '[Event Component] Close',
}

export const getEventsSuccess = createAction(
    ActionTypes.GetEvents,
    props<{ events: ItemEvent[] }>()
)

export const OpenEvent = createAction(
    ActionTypes.OpenEvent,
    props<{ event: ItemEvent }>()
)

export const CloseEvent = createAction(
    ActionTypes.CloseEvent,
    props<{ event: ItemEvent }>()
)