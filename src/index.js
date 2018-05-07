import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { render } from "react-dom";
import Hello from "./Hello";

const ButtonExampleColored = () => (
  <div>
    <Button color="red">Red</Button>
    <Button color="orange">Orange</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="olive">Olive</Button>
    <Button color="green">Green</Button>
    <Button color="teal">Teal</Button>
    <Button color="blue">Blue</Button>
    <Button color="violet">Violet</Button>
    <Button color="purple">Purple</Button>
    <Button color="pink">Pink</Button>
    <Button color="brown">Brown</Button>
    <Button color="grey">Grey</Button>
    <Button color="black">Black</Button>
  </div>
);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ButtonExampleColored />
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
