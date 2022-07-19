import React from 'react';
import {
  ShareGrid, SharePhoto
} from './styleSelector.styled.js';

const Share = (props) => {
  return (
    <ShareGrid >
        <SharePhoto src="https://cdn0.iconfinder.com/data/icons/social-network-24/512/Facebook-512.png" alt="fbLogo"/>
        <SharePhoto src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="twitterlogo"/>
        <SharePhoto src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" alt="pintrestLogo"/>
    </ShareGrid>
  );
};

export default Share