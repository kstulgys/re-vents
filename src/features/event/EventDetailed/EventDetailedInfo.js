import React, { Component } from "react"
import EventDetailedMap from "./EventDetailedMap"
import { format } from "date-fns"
import { Grid, Segment, Icon, Item, Header, Button } from "semantic-ui-react"

class EventDetailedInfo extends Component {
  state = {
    showMap: false
  }

  mapToggle = () => {
    this.setState(prevState => ({ showMap: !prevState.showMap }))
  }
  render() {
    const { event } = this.props
    return (
      <Segment.Group raised>
        <Segment attached="top">
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="info" size="large" color="orange" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="orange" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{`${format(event.date, "dddd Do MMM")} at ${format(
                event.date,
                "h:mm A"
              )}`}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="orange" />
            </Grid.Column>

            <Grid.Column width={11}>
              <p>{event.venue}</p>
            </Grid.Column>

            <Grid.Column width={4}>
              <Button
                content={this.state.showMap ? "Close Map" : "Open Map"}
                color="orange"
                onClick={this.mapToggle}
              />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.showMap && (
          <EventDetailedMap
            lat={event.venueLatLng.lat}
            lng={event.venueLatLng.lng}
          />
        )}
      </Segment.Group>
    )
  }
}

export default EventDetailedInfo
