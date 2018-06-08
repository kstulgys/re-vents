import { toastr } from "react-redux-toastr"

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

export const createEvent = event => async dispatch => {
  try {
    dispatch({
      type: CREATE_EVENT,
      payload: { event }
    })
    toastr.success("Success", "Event has been created")
  } catch (error) {
    toastr.error("Ops", "Something went wrong")
  }
}

export const updateEvent = event => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EVENT,
      payload: { event }
    })
    toastr.success("Success", "Event has been created")
  } catch (error) {
    toastr.error("Ops", "Something went wrong")
  }
}

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: { eventId }
})

export const fetchEvents = events => ({
  type: FETCH_EVENTS,
  payload: { events }
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
