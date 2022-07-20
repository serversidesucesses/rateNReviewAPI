import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [rating, setRating] = useState(0);
  const [countRatings, setCountRatings] = useState(0);
  const [name, setName] = useState('');
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
