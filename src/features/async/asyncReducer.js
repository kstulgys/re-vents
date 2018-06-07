import { createReducer } from "../../app/common/util/reducerUtil"

import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START
} from "./asyncConstants"

const initialState = {
  loading: false
}

export const asyncActionStarted = state => ({ ...state, loading: true })
export const asyncActionFinished = state => ({ ...state, loading: false })
export const asyncActionError = state => ({ ...state, loading: false })

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError
})
