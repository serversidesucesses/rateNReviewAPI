import React from 'react';
import {render, shallow } from '@testing-library/react';
import App from '../client/src/index.jsx';

test('renders without crashing', () => {
  render(<App/>);
});
