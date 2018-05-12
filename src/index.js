import React, { Component } from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Header from "./Header";
import EventDashboard from "./EventDashboard";

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

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
