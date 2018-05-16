import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";

const mapState = ({ events }) => ({
  events
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
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

        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
