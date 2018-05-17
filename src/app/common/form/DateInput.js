import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  width,
  placeholder,
  rows,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field error={touched && !!error} width={width}>
    <DatePicker
      {...rest}
      placeholder={placeholder}
      selected={value ? moment(value) : null}
      onChange={onChange}
      {...restInput}
    />
    {touched &&
      error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
  </Form.Field>
);

export default DateInput;
