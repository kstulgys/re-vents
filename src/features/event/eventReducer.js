import { createReducer } from "../../app/common/util/reducerUtil"
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS
} from "./eventConstants"

const initialState = []

export const createEvent = (state, payload) => {
  return [...state, payload.event]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ]
}

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)]
}

export const fetchEvents = (state, payload) => {
  return payload.events
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
})
