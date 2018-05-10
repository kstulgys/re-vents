import React from "react";

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
  Feed,
  List,
  Label,
  Icon
} from "semantic-ui-react";

import EventListAtendee from "./EventListAtendee";

const EventListItem = ({ event, onEventEdit }) => {
  return (
    <Segment.Group>
      <Segment raised color="orange">
        <Item.Group relaxed>
          <Item>
            <Item.Image circular size="tiny" src={event.hostPhotoUrl} />
            <Item.Content>
              <Item.Header as="a">{event.title}</Item.Header>
              <Item.Meta>
                <List horizontal>
                  <List.Item icon="calendar" content={event.date} /> |
                  <List.Item icon="marker" content={event.venue} />
                </List>
              </Item.Meta>
              <Item.Description>{event.description}</Item.Description>
              <Item.Extra>
                <Button
                  icon="user"
                  color="orange"
                  content="View"
                  floated="right"
                  style={{ marginRight: 5 }}
                  onClick={onEventEdit(event)}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees &&
            event.attendees.map(attendee => (
              <EventListAtendee key={attendee.id} attendee={attendee} />
            ))}
        </List>
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
