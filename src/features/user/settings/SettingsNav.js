import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const SettingsNav = () => (
  <div>
    <Menu vertical>
      <Header icon="user" attached inverted color="grey" content="Profile" />
      <Menu.Item name="Basic" as={NavLink} to="/settings/basic" />
      <Menu.Item name="About Me" as={NavLink} to="/settings/about" />
      <Menu.Item name="My Photos" as={NavLink} to="/settings/photos" />
    </Menu>
    <Menu vertical>
      <Header
        icon="settings"
        attached
        inverted
        color="grey"
        content="Account"
      />
      <Menu.Item name="My Account" as={NavLink} to="/settings/account" />
    </Menu>
  </div>
);

export default SettingsNav;
