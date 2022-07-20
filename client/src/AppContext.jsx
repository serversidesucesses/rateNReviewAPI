import React, { createContext, useMemo, useState } from 'react';

// const RatingContext = createContext({});

// const RatingContextReducer = (state, action) => ({ rating: action.payload });

// export function RatingContextProvider() {
//   const [state, dispatch] = useReducer(RatingContextReducer, {});
//   const RatingContextStore = useMemo(() => ({
//     state,
//     dispatch,
//   }), [state, dispatch]);
//   return <RatingContext.Provider value={RatingContextStore}>{children}</RatingContext.Provider>;
// }

// export const useRatingContext = () => useContext(RatingContext);

export const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [rating, setRating] = useState(0);
  const [countRatings, setCountRatings] = useState(0);
  const [name, setName] = useState('');
  console.log('here is context:', rating);
  const value = useMemo(() => ({
    rating,
    countRatings,
    name,
    setName,
    setRating,
    setCountRatings,
  }), [rating, countRatings, name]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
