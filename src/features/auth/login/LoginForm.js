import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInupt from "../../../app/common/form/TextInput";

const LoginForm = () => (
  <Form size="large">
    <Field name="email" component={TextInupt} type="text" placeholder="email" />
    <Field
      name="password"
      component={TextInupt}
      type="text"
      placeholder="password"
    />
    <Button fluid color="orange" type="submit" size="big">
      Submit
    </Button>
  </Form>
);

export default reduxForm({ form: "loginForm" })(LoginForm);

// <Form size="large">
//   <Segment>
// <Field
//   name="email"
//   component={TextInupt}
//   type="text"
//   placeholder="email"
// />
//     <Field
//       name="password"
//       component={TextInupt}
//       type="text"
//       placeholder="password"
//     />
//     <Button type="submit">Submit</Button>
//   </Segment>
// </Form>
