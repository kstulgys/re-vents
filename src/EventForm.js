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
const EventForm = ({ handleFormClose }) => (
  <Segment raised color="orange">
    <Form>
      <Form.Field>
        <label>Event Title</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Event Date</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>Venue</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <label>Hosted By</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Button basic content="Submit" color="orange" />
      <Button onClick={handleFormClose} basic content="Cancel" color="brown" />
    </Form>
  </Segment>
);

export default EventForm;
