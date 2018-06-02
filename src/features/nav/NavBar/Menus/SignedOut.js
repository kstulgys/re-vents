import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOut = ({ onSignIn, register }) => (
  <Menu.Item>
    <Button content="Sign In" onClick={onSignIn} />
    <Button
      content="Register"
      onClick={register}
      style={{ marginLeft: "0.5em" }}
    />
  </Menu.Item>
);

export default SignedOut;
