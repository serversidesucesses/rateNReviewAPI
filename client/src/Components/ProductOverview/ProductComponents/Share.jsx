import React from 'react';
import {
  ShareGrid, SharePhoto
} from '../../Styles/ProductOverview/styleSelector.styled.js';

import facebook from '../assets/facebook-icon.png';
import twitter from '../assets/twitter.png';
import pintrest from '../assets/pintrest.png';

const Share = (props) => {
  return (
    <ShareGrid >
        <SharePhoto src={facebook} alt="fbLogo"/>
        <SharePhoto src={twitter} alt="twitterlogo"/>
        <SharePhoto src={pintrest} alt="pintrestLogo"/>
    </ShareGrid>
  );
};

export default Share;
