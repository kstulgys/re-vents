import React, { Component } from "react";
import { Popup, Button, Header, Image, Modal } from "semantic-ui-react";
import { closeModal } from "./modalActions";
import { connect } from "react-redux";
import RegisterForm from "../auth/register/RegisterForm";

const actions = {
  closeModal
};

const RegisterModal = ({ closeModal }) => (
  <Modal size="mini" dimmer="blurring" open={true} onClose={closeModal}>
    <Modal.Header>Please Register</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <RegisterForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default connect(null, actions)(RegisterModal);
