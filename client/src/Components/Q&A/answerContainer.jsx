/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Photos from './photos.jsx';
import { Button } from '../styles/Q&A/buttons.styled';

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
    <div>
      <p>{`A: ${answer.body}`}</p>
      {answer.photos.length === 0
        ? null : answer.photos.map((photo) => <Photos photos={photo} />)}

      {(answer.answerer_name === 'Seller' || answer.answerer_name === 'seller')
        ? <span>by <b>Seller</b></span> : <span>by {answer.answerer_name}</span> }

      <span>{`, ${date.toLocaleDateString(undefined, options)}`}</span>
      <span>|</span>
      <Button type="button" onClick={() => helpfulness(answer.answer_id)}>Helpful?</Button>
      <span>{`Yes (${answer.helpfulness})`}</span>
      <span>|</span>
      {reported ? <span>Reported</span> : <Button type="button" onClick={() => report(answer.answer_id)}>Report</Button>}
    </div>
  );
}
