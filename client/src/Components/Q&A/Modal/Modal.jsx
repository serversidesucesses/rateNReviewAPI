import React from 'react';
import ModalHeader from './ModalHeader.jsx';
import AddAnswer from '../Forms/AddAnswer.jsx';
import {
  ModalWrapperStyled,
  ModalBackgroundStyled,
  ModalInnerStyled,
  ModalContentStyled,
} from '../../Styles/Q&A/modal.styled';

export default function Modal({
  isOpen,
  onCloseRequest,
  title,
  description
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapperStyled>
    <ModalBackgroundStyled />

    <ModalInnerStyled>
      <ModalHeader
        title={title}
        description={description}
        onClose={onCloseRequest}
      />
      <ModalContentStyled><AddAnswer /></ModalContentStyled>
    </ModalInnerStyled>
  </ModalWrapperStyled>
  );
}
