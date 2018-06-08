import { combineReducers } from "redux"
import eventReducer from "../../features/event/eventReducer"
import modalsReducer from "../../features/modal/modalsReducer"
import authReducer from "../../features/auth/authReducer"
import { reducer as FormReducer } from "redux-form"
import asyncReducer from "../../features/async/asyncReducer"
import { reducer as toastrReducer } from "react-redux-toastr"

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
})

export default rootReducer
