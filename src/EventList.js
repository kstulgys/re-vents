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
  Feed
} from "semantic-ui-react";
import EventListItem from "./EventListItem";

const EventList = ({ events }) => (
  <div>
    <h1>Event List... </h1>
    {events.map(event => <EventListItem key={event.id} event={event} />)}
  </div>
);

export default EventList;
