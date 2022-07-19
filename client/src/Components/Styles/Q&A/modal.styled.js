import styled from 'styled-components';

export const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  perspective: 5.5cm;
`;

export const ModalBackgroundStyled = styled.div`
  background: rgba(250, 250, 250, 0.3);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom: 0;
  z-index: 10;
`;

export const ModalInnerStyled = styled.div`
  background: white;
  border: 1px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  min-width: 30rem;
  z-index: 11;
`;

export const ModalHeaderStyled = styled.div`
  border-bottom: 1px solid black;
  padding: 3px;
  position: relative;
`;

export const ModalHeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  width: (80%);
`;

export const ModalHeaderContentStyled = styled.div`
  flex: 1;
`;

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalContentStyled = styled.div`
  padding: 2px;
`;
// top: ${props => props.theme.spacing.small};
// right: ${props => props.theme.spacing.small};
