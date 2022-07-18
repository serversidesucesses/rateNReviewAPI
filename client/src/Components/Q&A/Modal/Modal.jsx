import React from 'react';
import ModalHeader from './ModalHeader.jsx';
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
  description,
  children,
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
      <ModalContentStyled>{children}</ModalContentStyled>
    </ModalInnerStyled>
  </ModalWrapperStyled>
  );
}
