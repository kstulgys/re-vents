import React, { Component } from "react";
import { Segment, Button, Form, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "dance", text: "Dance", value: "dance" },
  { key: "coding", text: "Coding", value: "coding" }
];

const mapState = (state, ownProps) => {
  let event = {};
  const eventId = ownProps.match.params.id;
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return { initialValues: event };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  handleSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        hostedBy: "Bob",
        id: cuid(),
        hostPhotoUrl:
          "https://robohash.org/ipsumquoautem.jpg?size=100x100&set=set1"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment raised color="orange">
            <Header sub content="Event Details" color="orange" />
            <Form>
              <Field
                placeholder="Event title"
                name="title"
                component={TextInput}
                type="text"
              />
              <Field
                placeholder="Event category"
                name="category"
                component={SelectInput}
                options={category}
                type="text"
              />
              <Field
                component={TextArea}
                rows="3"
                type="text"
                placeholder="Event description"
                name="description"
              />
              <Header sub content="Location Details" color="orange" />
              <Field
                component={TextInput}
                type="text"
                placeholder="Event Date"
                name="date"
              />
              <Field
                component={TextInput}
                type="text"
                placeholder="City"
                name="city"
              />
              <Field
                component={TextInput}
                type="text"
                placeholder="Venue"
                name="venue"
              />

              <Button
                onClick={this.props.handleSubmit(this.handleSubmit)}
                basic
                content="Submit"
                color="orange"
              />
              <Button
                onClick={this.props.history.goBack}
                basic
                content="Cancel"
                color="brown"
              />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: "eventForm", enableReinitialize: true })(EventForm)
);
