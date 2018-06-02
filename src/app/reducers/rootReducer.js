import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";
import modalsReducer from "../../features/modal/modalsReducer";
import authReducer from "../../features/auth/authReducer";

import { reducer as FormReducer } from "redux-form";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer,
  auth: authReducer
});

export default rootReducer;
