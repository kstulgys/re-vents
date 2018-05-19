import React, { Component } from "react";
import { Segment, Button, Form, Grid, Header } from "semantic-ui-react";
import cuid from "cuid";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from "moment";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

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

const validate = combineValidators({
  title: isRequired({ message: "title os required" }),
  category: isRequired({ message: "category os required" }),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date"),
  description: composeValidators(
    isRequired({ message: "description is required" }),
    hasLengthGreaterThan(10)({
      message: "length has to be greater than 10 characters"
    })
  )()
});

class EventForm extends Component {
  handleSubmit = values => {
    values.date = moment(values.date).format();
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
    const { invalid, submitting, pristine } = this.props;
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
                placeholder="City"
                name="city"
              />
              <Field
                component={TextInput}
                type="text"
                placeholder="Venue"
                name="venue"
              />
              <Field
                component={DateInput}
                placeholderText="Pick the date"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
                placeholder="Event Date"
                name="date"
              />
              <Button
                disabled={invalid || submitting || pristine}
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
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
