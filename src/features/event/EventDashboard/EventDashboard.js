import React, { Component } from "react"
import { Grid } from "semantic-ui-react"
import { connect } from "react-redux"
import EventList from "../EventList/EventList"
import { deleteEvent } from "../eventActions"
import LoadingComponent from "../../../app/layout/LoadingComponent"
import EventActivity from "../EventActivity/EventActivity"

const mapState = ({ events, async }) => ({
  events,
  loading: async.loading
})

const actions = {
  deleteEvent
}

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId)
  }

  render() {
    if (this.props.loading) return <LoadingComponent />
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
          <EventActivity />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard)
