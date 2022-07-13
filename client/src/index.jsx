import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './Components/Q&A/questions.jsx';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';

const rootElement = document.getElementById('root');

function App() {
  return (
    <>
      <ProductMain />
      <QuestionList />
      <ReviewMain />
    </>
  );
}

ReactDOM.render(<App />, rootElement);
