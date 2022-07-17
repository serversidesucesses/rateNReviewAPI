import React from 'react';
import ReactDOM from 'react-dom';
import QuestionListContainer from './Components/Q&A/questions.jsx';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';

const rootElement = document.getElementById('root');

function App({ product_id }) {
  return (
    <>
      <ProductMain />
      <QuestionListContainer />
      <ReviewMain product_id={product_id}/>
    </>
  );
}

App.defaultProps = {
  product_id: 40346,
};

ReactDOM.render(<App />, rootElement);
