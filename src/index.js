import React from "react"
import { render } from "react-dom"
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
import "semantic-ui-css/semantic.min.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./app/layout/App"
import { configureStore } from "./app/store/configureStore"
import ScrollToTop from "./app/common/util/ScrollToTop"
import SimpleMap from "./features/test/SimpleForm"
import { loadEvents } from "./features/event/eventActions"
import ReduxToastr from "react-redux-toastr"

const store = configureStore()

store.dispatch(loadEvents())

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
)
