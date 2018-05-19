import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app/layout/App";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
const store = configureStore();
import SimpleForm from "./features/test/SimpleForm";

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <SimpleForm />
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
