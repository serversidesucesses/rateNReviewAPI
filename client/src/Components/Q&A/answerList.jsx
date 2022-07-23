/* eslint-disable import/extensions */
import React, {useState} from 'react';
import Photo from '../../Assets/photo.jsx';
import { ButtonStyled, ButtonContainerAnsStyled } from '../Styles/Q&A/buttons.styled';
import { AnswerStyled, SpanStyled } from '../Styles/Q&A/container.styled';
import { PhotosContainerStyled } from '../Styles/Q&A/photo.styled';

export default function AnswerList({ answer, helpfulness, report }) {

  const [helpfulClicked, setHelpfulClick] = useState(false);
  console.log(answer.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(answer.date.replace(/-/g, '/').replace(/T.+/, '')).toLocaleDateString('en-US', options);
  const helpfulBtn = () => {
    helpfulness(answer.answer_id)
    setHelpfulClick(true);
  }

  return (
    <AnswerStyled>
      <p style={{margin: 0}}>{answer.body}</p>
      {answer.photos.length === 0
        ? null
        : (
          <PhotosContainerStyled>
            {' '}
            {answer.photos.map((photo, index) => <Photo key={index} photos={photo} />)}
            {' '}
          </PhotosContainerStyled>
        )}

      <ButtonContainerAnsStyled>
        <div>
          {(answer.answerer_name === 'Seller' || answer.answerer_name === 'seller')
            ? (
              <SpanStyled>
                by
                {' '}
                <b>Seller</b>
                ,
                {' '}
              </SpanStyled>
            ) : (
              <SpanStyled>
                by
                {' '}
                {answer.answerer_name}
                ,
                {' '}
              </SpanStyled>
            ) }
          <SpanStyled>{`${date}`}</SpanStyled>
        </div>
        <span style={{opacity:0.5}}>|</span>
        <div>
          {helpfulClicked ? <SpanStyled>Helpful?</SpanStyled> : <ButtonStyled type="button" onClick={helpfulBtn}>Helpful?</ButtonStyled> }
          <SpanStyled>{`  Yes (${answer.helpfulness})`}</SpanStyled>
        </div>
        <span style={{opacity:0.5}}>|</span>
        <ButtonStyled type="button" onClick={() => report(answer.answer_id)}>Report</ButtonStyled>
      </ButtonContainerAnsStyled>
    </AnswerStyled>
  );
}
