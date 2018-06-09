import React from "react"
import { Button, Form, Label } from "semantic-ui-react"
import { Field, reduxForm } from "redux-form"
import TextInupt from "../../../app/common/form/TextInput"
import { connect } from "react-redux"
import { login } from "../authActions"

const actions = {
  login
}

const LoginForm = ({ login, handleSubmit, error }) => (
  <Form size="large" onSubmit={handleSubmit(login)}>
    <Field name="email" component={TextInupt} type="text" placeholder="email" />
    <Field
      name="password"
      component={TextInupt}
      type="text"
      placeholder="password"
    />
    {error && (
      <Label basic color="red" pointing>
        {error}
      </Label>
    )}

    <Button fluid color="orange" type="submit" size="big">
      Submit
    </Button>
  </Form>
)

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm))

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
