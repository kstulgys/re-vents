import React from "react";
import { Segment, Button, Item, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EventListAtendee from "./EventListAtendee";

const EventListItem = ({ event, onEventDelete }) => {
  return (
    <Segment.Group raised>
      <Segment color="orange" style={{ paddingBottom: 0 }}>
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
                  basic
                  color="orange"
                  content="View"
                  floated="right"
                  style={{ marginRight: 5 }}
                  as={Link}
                  to={`/event/${event.id}`}
                />
                <Button
                  color="red"
                  content="Delete"
                  floated="right"
                  style={{ marginRight: 5 }}
                  onClick={onEventDelete(event.id)}
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
