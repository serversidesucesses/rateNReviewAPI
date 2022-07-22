import React, { useState, createContext, useMemo } from 'react';
import ReactDOM from 'react-dom';
import QuestionListContainer from './Components/Q&A/questions.jsx';
import ProductMain from './Components/ProductOverview/ProductMain.jsx';
import ReviewMain from './Components/Ratings&Reviews/reviewMain.jsx';
import AppContextProvider, { AppContext } from './AppContext.jsx';
import GlobalCSS from './Components/Styles/globalstyle.styled.js';

// const RatingContext = createContext(null);

export default function App({ product_id }) {
  return (

    <AppContextProvider>
      <GlobalCSS/>
      <ProductMain product_id={product_id}/>
      <QuestionListContainer />
      <ReviewMain product_id={product_id} />
   </AppContextProvider>

  );
}

App.defaultProps = {
  product_id: 40346,
};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
