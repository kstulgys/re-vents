import React from "react";

import { List, Segment, Image, Item, Header, Label } from "semantic-ui-react";

const isHost = false;

const EventDetailedSidebar = ({ attendees }) => (
  <Segment.Group>
    <Segment
      inverted
      color="orange"
      attached="top"
      style={{ border: "none" }}
      textAlign="center"
    >
      <Header>
        {attendees && attendees.length}
        {attendees && attendees.length === 1 ? " Person" : " Persons"} is going{" "}
      </Header>
    </Segment>
    <Segment attached>
      <List divided verticalAlign="middle" relaxed>
        {attendees &&
          attendees.map(attendee => (
            <List.Item
              key={attendee.id}
              style={{ position: "relative" }}
              verticalAlign="middle"
            >
              {isHost && (
                <Label
                  as="a"
                  basic
                  color="orange"
                  ribbon="right"
                  style={{ position: "absolute" }}
                  content="host"
                />
              )}

              <Image rounded src={attendee.photoUrl} />
              <List.Content>
                <List.Header as="a">{attendee.name}</List.Header>
              </List.Content>
            </List.Item>
          ))}
      </List>
    </Segment>
  </Segment.Group>

);

export default EventDetailedSidebar;
