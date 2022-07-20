/* eslint-disable import/extensions */
import React from 'react';
import Photo from './photo.jsx';
import { Button, ButtonContainerAns } from '../Styles/Q&A/buttons.styled';
import { Answer, Span } from '../Styles/Q&A/container.styled';
import { PhotosContainer } from '../Styles/Q&A/photo.styled';

export default function AnswerList({ answer, helpfulness, report }) {
  // Date conversion
  console.log(answer.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(answer.date.replace(/-/g, '/').replace(/T.+/, '')).toLocaleDateString('en-US', options);

  // console.log(AnswerDate);
  return (
    <Answer>
      <p>{answer.body}</p>
      {answer.photos.length === 0
        ? null
        : (
          <PhotosContainer>
            {' '}
            {answer.photos.map((photo, index) => <Photo key={index} photos={photo} />)}
            {' '}
          </PhotosContainer>
        )}

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
        <span>|</span>
        <div>
          <Button type="button" onClick={()=> helpfulness(answer.answer_id)}>Helpful?</Button>
          <Span>{`  Yes (${answer.helpfulness})`}</Span>
        </div>
        <span>|</span>
        <Button type="button" onClick={() => report(answer.answer_id)}>Report</Button>
      </ButtonContainerAns>
    </Answer>
  );
}
