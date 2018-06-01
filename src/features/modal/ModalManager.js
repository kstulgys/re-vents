import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";

const modalLookUp = {
  TestModal
};

const mapState = state => ({
  currentModal: state.modals
});

const ModalManager = ({ currentModal }) => {
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
};

export default connect(mapState)(ModalManager);
