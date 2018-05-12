import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedIn = ({ onSignOut }) => {
  const trigger = (
    <span>
      <Image
        spaced="right"
        avatar
        src="https://robohash.org/ipsumquoautem.jpg?size=100x100&set=set1"
      />
      Some Name
    </span>
  );

  return (
    <Dropdown trigger={trigger} pointing="top left" icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item
          text="Settings"
          icon="settings"
          as={Link}
          to="/settings"
        />
        <Dropdown.Item text="Sign Out" icon="sign out" onClick={onSignOut} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SignedIn;

// <Menu.Item name="logout" onClick={onSignOut} />
