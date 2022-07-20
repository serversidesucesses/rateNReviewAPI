import styled from 'styled-components';

export const PhotosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  div {
    padding-right: 20px;
    width: 100px;
  }
  background: white;
`;

export const PhotoEnlarge = styled.img`
  position: fixed;
  width: 50%;
  height: 60%;
  z-index: 3;
  top: 20%;
  left: 25%;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;
