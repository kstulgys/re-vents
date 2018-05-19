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
  Header,
  Message,
  Icon
} from "semantic-ui-react";

const HomePage = ({ history }) => (
  <div className="parallax" style={styles.parallax} fluid>
    <div style={styles.textContainer}>
      <h1>Hello from const HomePage</h1>
      <Button
        onClick={() => history.push("/events")}
        content="Check Out The Events"
        basic
        color="orange"
        size="massive"
        icon="heart"
      />
    </div>
  </div>
);

export default HomePage;

const styles = {
  parallax: {
    backgroundImage:
      "url(https://uploads.codesandbox.io/uploads/user/c5ae0278-668e-456d-a479-05a93d488511/auhW-collaboration-colleagues-community-398532.jpg)",
    filter: "brightness(70%)",
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
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  textContainer: {
    fontWeight: "bold",
    color: "white",
    fontSize: 38,
    paddingBottom: 25,
    zIndex: 1000
  }
};
