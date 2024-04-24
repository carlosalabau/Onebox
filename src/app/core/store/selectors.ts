import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemEvent } from "../../shared/models/item-event.model";



export const selectBookState = createFeatureSelector<ItemEvent>('event');
export const selectEventList = createSelector(selectBookState, (state) => state);