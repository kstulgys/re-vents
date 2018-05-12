import React from "react";
import { Menu } from "semantic-ui-react";

const SignedOut = ({ onSignIn }) => (
  <Menu.Item name="Sign In" onClick={onSignIn} />
);

export default SignedOut;
