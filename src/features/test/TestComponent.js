import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { openModal } from "../modal/modalActions";

const actions = {
  openModal
};

const TestComponent = ({ openModal }) => (
  <div>
    <Button
      content="click to open the modal"
      fluid
      onClick={() => openModal("TestModal", { data: 43 })}
    />
  </div>
);

export default connect(null, actions)(TestComponent);
