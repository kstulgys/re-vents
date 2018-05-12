import React, { Component } from "react";
import "normalize.css";
import { render } from "react-dom";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import {
  Menu,
  Segment,
  Container,
  Button,
  Grid,
  Form,
  Checkbox,
  Item,
  Image,
  Divider,
  Card,
  Feed
} from "semantic-ui-react";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
