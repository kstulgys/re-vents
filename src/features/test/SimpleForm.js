import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;
const KEY = "AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
