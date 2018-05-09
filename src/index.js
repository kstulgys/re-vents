import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";
import EventDashboard from "./EventDashboard";
import eventsMockData from "./events";

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

const EventList = ({ events }) => (
  <div>
    {events.map(event => <EventListItem key={event.id} event={event} />)}
  </div>
);

class App extends Component {
  state = { events: eventsMockData };

  render() {
    return (
      <div>
        <Header />
        <Container>
          <EventDashboard events={this.state.events} />
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
