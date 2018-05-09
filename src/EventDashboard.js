import React, { Component } from "react";
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

import EventForm from "./EventForm";
import EventList from "./EventList";

class EventDashboard extends Component {
  state = {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleFormClose = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: 50 }}>
          <Grid columns={2} padded>
            <Grid.Column width={10}>
              <EventList events={this.props.events} />
            </Grid.Column>

            <Grid.Column width={6}>
              <Button
                onClick={this.handleFormOpen}
                color="orange"
                content="Create Event"
              />

              {this.state.isOpen && (
                <EventForm handleFormClose={this.handleFormClose} />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default EventDashboard;
