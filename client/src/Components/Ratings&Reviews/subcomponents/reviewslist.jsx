import React, { useState } from 'react';
import Review from './review.jsx';
import Modal from './Modal/Modal.jsx';
import AddReview from './Forms/addReview.jsx';
import SortView from './sortview.jsx';
import { ReviewListStyled, ReviewListButtonStyled } from '../../Styles/Reviews/bars.styled.js';

export default function ReviewsList({ reviews, loadMoreReviews, characteristics, product_id, selectHandler, reviewCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  // const formValidator = () => {

  // };

  return (
    <div style={{ marginBottom: '10px', marginTop: '20px' }}>
      <SortView selectHandler={selectHandler} reviewCount={reviewCount} />
      <ReviewListStyled>
        { isModalOpen
          ? (
            <Modal
              title="Add a Review"
              description="A short description of the modal's contents"
              isOpen={isModalOpen}
              onCloseRequest={onModalCloseRequest}
            >
              <AddReview characteristics={characteristics} product_id={product_id} />
            </Modal>
          )
          : null }
        {reviews.map((review) => <Review key={review.review_id} review={review} />)}
      </ReviewListStyled>
      <div>
        <ReviewListButtonStyled type="button" onClick={loadMoreReviews}>More Reviews</ReviewListButtonStyled>
        <ReviewListButtonStyled type="button" onClick={() => setIsModalOpen(true)}>Add a Review</ReviewListButtonStyled>
      </div>
      {/* <ReviewListButtonStyled type="button" onClick={loadMoreReviews}>More Reviews</ReviewListButtonStyled>
      <ReviewListButtonStyled type="button" onClick={() => setIsModalOpen(true)}>Add a Review</ReviewListButtonStyled> */}
    </div>
  );
}
