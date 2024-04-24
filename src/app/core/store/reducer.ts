import { createReducer, on } from '@ngrx/store';
import { OpenEvent } from './actions';
import { IEventState } from '../../shared/models/item-event.model';

export const initialState: IEventState = {
    events: []
};

export const EventReducer = createReducer(initialState,
    on(OpenEvent, (state, { event }) => ({
        ...state,
        event: event
    }))
) 