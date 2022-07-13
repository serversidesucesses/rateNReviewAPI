/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Photos from './photos.jsx';
import { Button, ButtonContainerAns } from '../styles/Q&A/buttons.styled';
import { Answer, Span } from '../styles/Q&A/container.styled';

const axios = require('axios');

export default function AnswerContainer({ answer, helpfulness }) {
  const [reported, setReported] = useState(false);

  function report(answer_id) {
    console.log(answer_id);
    axios.put(`/questions/reportA/?answer_id=${answer_id}`)
      .then(() => setReported(true))
      .catch((error) => console.log(error));
  }

  // Date conversion
  const date = new Date(answer.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <Answer>
      <p>{answer.body}</p>
      {answer.photos.length === 0
        ? null : answer.photos.map((photo) => <Photos photos={photo} />)}

      <ButtonContainerAns>
        <div>
          {(answer.answerer_name === 'Seller' || answer.answerer_name === 'seller')
            ? <Span>by <b>Seller</b>, </Span> : <Span>by {answer.answerer_name}, </Span> }
          <Span>{`${date.toLocaleDateString(undefined, options)}`}</Span>
        </div>
        <span>|</span>
        <div>
          <Button type="button" onClick={() => helpfulness(answer.answer_id)}>Helpful?</Button>
          <Span>{`  Yes (${answer.helpfulness})`}</Span>
        </div>
        <span>|</span>
        {reported ? <span>Reported</span> : <Button type="button" onClick={() => report(answer.answer_id)}>Report</Button>}
      </ButtonContainerAns>
    </Answer>
  );
}
