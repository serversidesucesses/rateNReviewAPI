import React, { useState } from 'react';
import axios from 'axios';
// import Stars from './stars';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default function Review({ review }) {
  const reviewDate = new Date(review.date).toLocaleDateString('en-US', options);
  const [helpCount, setHelpCount] = useState(review.helpfulness);
  // const [notClicked, setClick] = useState(true);

  const helpHandler = () => {
    axios.put(`/reviews/mark/helpful?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        setHelpCount((prevCount) => prevCount + 1);
        // setDidClick(false);
      })
      .catch((err) => {console.log(err)});
  };

  const reportHandler = () => {
    axios.put(`/reviews/mark/report?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        // setDidClick(false);
      })
      .catch((err) => { console.log(err); });
  };

  return (
    <div>
      {/* <Stars/> */}
      <small>
        {`${review.reviewer_name},  ${reviewDate}`}
      </small>

      <h3>{review.summary.slice(0, 250)}</h3>

      <p>{review.body}</p>

      {review.recommend && <small>I recommend this product</small>}
      {review.response && <p>{review.response}</p>}
      <small>
        Helpful?
        <button type="button" onClick={helpHandler}>Yes</button>
        {`(${helpCount})`}
        |
        <button type="button" onClick={reportHandler}>Report</button>
      </small>
    </div>
  );
}
