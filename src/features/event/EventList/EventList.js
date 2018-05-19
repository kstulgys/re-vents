import React, { Component } from "react";
import EventListItem from "./EventListItem";
const EventList = ({ events, onEventDelete }) => (
  <div>
    {events.map(event => (
      <EventListItem
        key={event.id}
        event={event}
        onEventDelete={onEventDelete}
      />
    ))}
  </div>
);

export default EventList;
