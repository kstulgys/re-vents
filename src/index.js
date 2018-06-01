import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/layout/App";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
import SimpleMap from "./features/test/SimpleForm";

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
