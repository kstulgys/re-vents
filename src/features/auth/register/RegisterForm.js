import React from "react"
import { connect } from "react-redux"
import { Button, Form, Segment } from "semantic-ui-react"
import { Field, reduxForm } from "redux-form"
import TextInupt from "../../../app/common/form/TextInput"
import { registerUser } from "../authActions"

const actions = {
  registerUser
}

const RegisterForm = ({ handleSubmit, registerUser }) => (
  <Form size="large" onSubmit={handleSubmit(registerUser)}>
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
      type="password"
      placeholder="password"
    />

    <Button fluid color="orange" type="submit" size="big" content="Register" />
  </Form>
)

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(RegisterForm))
