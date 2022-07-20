import React, { useState, createContext, useMemo } from 'react';
import ReactDOM from 'react-dom';
import QuestionListContainer from './Components/Q&A/questions.jsx';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';
import RatingContextProvider, { RatingContext } from './RatingContext.jsx';

// const RatingContext = createContext(null);

export default function App({ product_id }) {
  // const [rating, setRating] = useState(0);
  // const value = useMemo(
  //   () => ({ rating, setRating }),
  //   [rating],
  // );

  console.log('parent rerender');
  return (
    <>
      <RatingContextProvider>
        <ProductMain />
        <QuestionListContainer />
        <ReviewMain product_id={product_id} />
      </RatingContextProvider>
    </>
  );
}

App.defaultProps = {
  product_id: 40346,
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
