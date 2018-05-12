import React from "react";
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
  Header
} from "semantic-ui-react";

const HomePage = () => (
  <div className="parallax" style={styles.parallax} fluid>
    <h1 style={styles.textContainer}>Hello from const HomePage</h1>
    <Button
      content="Check Out The Events"
      basic
      color="orange"
      size="massive"
      icon="heart"
    />
  </div>
);

export default HomePage;

const styles = {
  parallax: {
    backgroundImage:
      "url(https://uploads.codesandbox.io/uploads/user/c5ae0278-668e-456d-a479-05a93d488511/auhW-collaboration-colleagues-community-398532.jpg)",
    opacity: 0.5,
    height: "100vh",

    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  textContainer: {
    fontWeight: "bold",
    color: "white",
    fontSize: 38,
    paddingBottom: 25
  }
};
