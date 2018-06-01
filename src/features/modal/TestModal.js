import React, { Component } from "react";

import { Popup, Button, Header, Image, Modal } from "semantic-ui-react";
import { closeModal } from "./modalActions";
import { connect } from "react-redux";
const actions = {
  closeModal
};

const TestModal = ({ closeModal }) => (
  <Modal dimmer="blurring" open={true} onClose={closeModal}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, actions)(TestModal);
