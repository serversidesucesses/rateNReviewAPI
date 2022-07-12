import React from 'react';

export default function AnswerContainer({ answer }) {
  return (
    <div>
      <p>{answer.body}</p>
      {answer.photos.length === 0
        ? null : <span>Photos</span>}
      {(answer.answerer_name === 'Seller' || answer.answerer_name === 'seller')
        ? <span>by <b>Seller</b></span> : <span>by {answer.answerer_name}</span> }
      <span>{`, ${answer.date}`}</span>
      <span>|</span>
      <a href='#'>Helpful?</a>
      <span>Yes ({answer.helpfulness})</span> {/* need to add a click handler*/}
      {answer.reported ? <span>Reported</span> : <a href='#'>Report</a>} {/* need to add a click handler*/}
    </div>
  );
}
