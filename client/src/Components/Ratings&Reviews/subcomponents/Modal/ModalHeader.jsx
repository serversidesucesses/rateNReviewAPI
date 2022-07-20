import React from 'react';
import {
  ModalHeaderStyled,
  CloseButtonStyled,
  ModalHeaderContentStyled,
} from '../../../Styles/Q&A/modal.styled';

export default function ModalHeader({ title, description, onClose }) {
  return (
    <ModalHeaderStyled>
      <CloseButtonStyled onClick={() => onClose()}>X</CloseButtonStyled>
      <ModalHeaderContentStyled>
        <h1>{title}</h1>
        <p>{description}</p>
      </ModalHeaderContentStyled>

    </ModalHeaderStyled>
  );
}
