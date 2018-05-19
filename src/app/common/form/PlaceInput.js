import React from "react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { Form, Label, Select } from "semantic-ui-react";

const KEY = "AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc";

const styles = {
  autocompleteContainer: {
    zIndex: 1000
  }
};

class PlaceInput extends React.Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  render() {
    const {
      input,
      width,
      placeholder,
      options,
      onSelect,
      meta: { touched, error }
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCg-KjDWrXr0x2e5jZeD9O3NJeyfCa3sJc&libraries=places"
          onLoad={this.handleScriptLoad}
        />

        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            inputProps={{ ...input, placeholder }}
            options={options}
            onSelect={onSelect}
            styles={styles}
          />
        )}
        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    );
  }
}

export default PlaceInput;

// onChange = address => this.setState({ address });

// handleFormSubmit = event => {
//   event.preventDefault();

//   geocodeByAddress(this.state.address)
//     .then(results => getLatLng(results[0]))
//     .then(latLng => console.log("Success", latLng))
//     .catch(error => console.error("Error", error));
// };
