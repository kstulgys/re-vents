import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  width,
  type,
  placeholder,
  rows,
  meta: { touched, error }
}) => (
  <Form.Field error={touched && !!error} width={width}>
    <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
    {touched &&
      error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
  </Form.Field>
);

export default TextArea;
