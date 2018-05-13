import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";

const mapState = ({ events }) => ({
  events
});

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      selectedEvent: null
    }));
  };

  handleFormClose = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleUpdateEvent = eventUpdate => {
    this.setState({
      events: this.state.events.map(event => {
        if (eventUpdate.id === event.id) {
          return Object.assign({}, eventUpdate);
        }
        return event;
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    const newEvents = [...this.state.events, newEvent];
    this.setState({ events: newEvents, isOpen: false });
  };

  handleOpenEvent = eventOpen => () => {
    this.setState({
      isOpen: true,
      selectedEvent: eventOpen
    });
  };

  handleDeleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(
      event => event.id !== eventId
    );
    this.setState({ events: updatedEvents });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventDelete={this.handleDeleteEvent}
            events={this.props.events}
            onEventOpen={this.handleOpenEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            color="orange"
            content="Create Event"
          />

          {this.state.isOpen && (
            <EventForm
              onEventUpdate={this.handleUpdateEvent}
              selectedEvent={this.state.selectedEvent}
              createEvent={this.handleCreateEvent}
              handleFormClose={this.handleFormClose}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(EventDashboard);
