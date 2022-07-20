/* eslint-disable import/extensions */
import React from 'react';
import Photo from '../../Assets/photo.jsx';
import { Button, ButtonContainerAns } from '../Styles/Q&A/buttons.styled';
import { Answer, Span } from '../Styles/Q&A/container.styled';
// import { PhotosContainer } from '../Styles/Q&A/photo.styled';
const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default function AnswerList({ answer, helpfulness, report }) {
  console.log(answer);

  // Date conversion
  const date = new Date(answer.date.replace(/-/g, '\/').replace(/T.+/, '')).toLocaleDateString('en-US', options);


  return (
    <Answer>
      <p>{answer.body}</p>
      {/* {answer.photos.length === 0
        ? null
        : (
          <PhotosContainer >
            {' '}
            {answer.photos.map((photo, index) => <Photo key={index} photos={photo} />)}
            {' '}
          </PhotosContainer>
        )} */}

      <ButtonContainerAns>
        <div>
          {(answer.answerer_name === 'Seller' || answer.answerer_name === 'seller')
            ? (
              <Span>
                by
                {' '}
                <b>Seller</b>
                ,
                {' '}
              </Span>
            ) : (
              <Span>
                by
                {' '}
                {answer.answerer_name}
                ,
                {' '}
              </Span>
            ) }
          <Span>{`${date}`}</Span>
        </div>
        <span style={{opacity:0.5}}>|</span>
        <div>
          <Button type="button" onClick={()=> helpfulness(answer.answer_id)}>Helpful?</Button>
          <Span>{`  Yes (${answer.helpfulness})`}</Span>
        </div>
        <span style={{opacity:0.5}}>|</span>
        <Button type="button" onClick={() => report(answer.answer_id)}>Report</Button>
      </ButtonContainerAns>
    </Answer>
  );
}
