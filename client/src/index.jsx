import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './Components/Q&A/questions.jsx';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';

const rootElement = document.getElementById('root');

function App() {
  return(
    <>
      <ProductMain />
      <QuestionList />
    </>
  )
}

ReactDOM.render(<App />, rootElement);
