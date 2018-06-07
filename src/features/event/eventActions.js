import {
  FETCH_EVENTS,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from "./eventConstants"
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart
} from "../async/asyncActions"

import { fetchSampleData } from "../../app/data/mockApi"

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: { event }
})

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: { event }
})

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: { eventId }
})

export const fetchEvents = events => ({
  type: FETCH_EVENTS,
  payload: events
})

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let events = await fetchSampleData()
      dispatch(fetchEvents(events))
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}
