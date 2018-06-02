import React, { Component } from "react";
import { Popup, Button, Header, Image, Modal } from "semantic-ui-react";
import { closeModal } from "./modalActions";
import { connect } from "react-redux";
import LoginForm from "../auth/login/LoginForm";

const actions = {
  closeModal
};

const LoginModal = ({ closeModal }) => (
  <Modal size="mini" dimmer="blurring" open={true} onClose={closeModal}>
    <Modal.Header>Please Log In</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <LoginForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, actions)(LoginModal);
