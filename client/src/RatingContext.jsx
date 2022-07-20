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

export const RatingContext = createContext(null);

export default function RatingContextProvider({children}) {
  const [rating, setRating] = useState(0);
  console.log('here is context:', rating);
  const value = useMemo(() => ({
    rating,
    setRating,
  }), [rating]);

  return <RatingContext.Provider value={value}>{children}</RatingContext.Provider>;
}
