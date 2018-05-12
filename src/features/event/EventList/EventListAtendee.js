import React, { Component } from "react";
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
  List
} from "semantic-ui-react";
import EventListItem from "./EventListItem";

const EventListAtendee = ({ attendee: { photoUrl } }) => (
  <List.Item>
    <Image
      style={{ backgroundColor: "black" }}
      primary
      circular
      size="mini"
      src={photoUrl}
    />
  </List.Item>
);

export default EventListAtendee;

// style={{backgroundColor: 'white'}}
