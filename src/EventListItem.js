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

const EventListItem = ({
  event: {
    title,
    description,
    date,
    category,
    city,
    venue,
    hostedBy,
    hostPhotoUrl,
    attendees
  }
}) => {
  return (
    <Segment.Group>
      <Segment raised color="orange">
        <Item.Group relaxed>
          <Item>
            <Item.Image circular size="tiny" src={hostPhotoUrl} />
            <Item.Content>
              <Item.Header as="a">{title}</Item.Header>
              <Item.Meta>
                <List horizontal>
                  <List.Item icon="calendar" content={date} /> |
                  <List.Item icon="marker" content={venue} />
                </List>
              </Item.Meta>
              <Item.Description>{description}</Item.Description>
              <Item.Extra>
                <Button
                  icon="user"
                  color="orange"
                  content="View"
                  floated="right"
                  style={{ marginRight: 5 }}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {attendees.map(attendee => (
            <EventListAtendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
