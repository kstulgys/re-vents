import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedIn from "./Menus/SignedIn";
import SignedOut from "./Menus/SignedOut";

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
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState(prevState => ({ authenticated: !prevState.authenticated }));
  };
  handleSignOut = () => {
    this.setState(prevState => ({ authenticated: !prevState.authenticated }));
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <div style={{ padding: 25 }}>
        <Menu pointing secondary stackable>
          <Menu.Item as={Link} to="/">
            <Icon name="home" size="large" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/test" name="Test" />

          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item as={Link} to="/createEvent" name="Create Event" />
          )}
          <Menu.Menu position="right">
            {authenticated ? (
              <SignedIn onSignOut={this.handleSignOut} />
            ) : (
              <SignedOut onSignIn={this.handleSignIn} />
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
