import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  Segment,
  Container,
  Button,
  Grid,
  Form,
  Checkbox,
  Item,
  Image,
  Divider,
  Card,
  Feed,
  Icon
} from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <div style={{ padding: 25 }}>
        <Menu pointing secondary stackable>
          <Menu.Item as={Link} to="/">
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/createEvent" name="Create Event" />
            <Menu.Item name="logout" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
