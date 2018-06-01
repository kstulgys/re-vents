import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";
import modalsReducer from "../../features/modal/modalsReducer";

import { reducer as FormReducer } from "redux-form";
const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalsReducer
});

export default rootReducer;
