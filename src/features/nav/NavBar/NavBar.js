import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedIn from "./Menus/SignedIn";
import SignedOut from "./Menus/SignedOut";
import { connect } from "react-redux";
import { openModal } from "../../modal/modalActions";
import { logOut } from "../../auth/authActions";

import { Menu, Icon } from "semantic-ui-react";

const actions = {
  openModal,
  logOut
};

const mapState = state => ({
  auth: state.auth
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.logOut();
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const { authenticated, currentUser } = auth;

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
              <SignedIn
                onSignOut={this.handleSignOut}
                currentUser={currentUser}
              />
            ) : (
              <SignedOut
                onSignIn={this.handleSignIn}
                register={this.handleRegister}
              />
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));
