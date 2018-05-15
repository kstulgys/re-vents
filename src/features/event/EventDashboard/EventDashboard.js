import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

const mapState = ({ events }) => ({
  events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

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

  handleOpenEvent = eventOpen => () => {
    this.setState({
      isOpen: true,
      selectedEvent: eventOpen
    });
  };

  handleUpdateEvent = eventUpdate => {
    this.props.updateEvent(eventUpdate);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleCreateEvent = newEvent => {
    this.props.createEvent(newEvent);
    this.setState({ isOpen: false });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
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

export default connect(mapState, actions)(EventDashboard);
