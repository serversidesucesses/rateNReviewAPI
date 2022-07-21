import React from 'react';
import {render, screen, getByLabelText} from '@testing-library/react';
import {toBeTruthy} from '@testing-library/jest-dom';
import  AddQuestion from '../client/src/Components/Q&A/Forms/questionform.jsx';
import AddAnswer from '../client/src/Components/Q&A/Forms/addAnswer.jsx';

describe('has a label of "Your email *" in question form', () => {
  test('has a label of "Email"', () => {
    render(<AddQuestion />)
    const inputNode = screen.getByLabelText('Your email *', {selector: 'input'})
    expect(inputNode).toBeTruthy();
  });
})


describe('has a placeholder of "Enter an answer..." in answer form', () => {
  test('has a placeholder of "Enter an answer..." in answer form', async() => {
    render(<AddAnswer />)
    const inputNode = screen.getByPlaceHolderText("Enter an answer...")
    expect(inputNode).toBeTruthy();
  });
})



