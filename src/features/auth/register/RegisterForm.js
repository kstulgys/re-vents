import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInupt from "../../../app/common/form/TextInput";

const RegisterForm = () => (
  <Form size="large">
    <Field
      name="displayName"
      component={TextInupt}
      type="text"
      placeholder="Known as"
    />
    <Field name="email" component={TextInupt} type="text" placeholder="email" />
    <Field
      name="password"
      component={TextInupt}
      type="text"
      placeholder="password"
    />

    <Button fluid color="orange" type="submit" size="big" content="Register" />
  </Form>
);

export default reduxForm({ form: "loginForm" })(RegisterForm);
