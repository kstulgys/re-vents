import React from "react";
import { Grid, Segment, Icon, Item, Header, Button } from "semantic-ui-react";

const EventDetailedInfo = ({ event }) => (
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
          <p>{event.date}</p>
        </Grid.Column>
      </Grid>
    </Segment>
    <Segment attached="bottom">
      <Grid verticalAlign="middle">
        <Grid.Column width={1}>
          <Icon name="marker" size="large" color="orange" />
        </Grid.Column>

        <Grid.Column width={11}>
          <p>{event.venue}</p>
        </Grid.Column>

        <Grid.Column width={4}>
          <Button content="Show Map" color="orange" />
        </Grid.Column>
      </Grid>
    </Segment>
  </Segment.Group>
);

export default EventDetailedInfo;
