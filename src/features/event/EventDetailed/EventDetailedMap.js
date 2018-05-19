import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon, Segment } from "semantic-ui-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;
const KEY = "AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc";

const EventDetailedMap = ({ lng, lat }) => {
  const center = { lat, lng };
  const zoom = 14;
  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
