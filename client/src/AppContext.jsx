import React, { createContext, useMemo, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({children}) {
  const [ratingAndCount, setRatingAndCount] = useState([]);
  // const [countRatings, setCountRatings] = useState([]);
  const [name, setName] = useState('');
  const [productID, setProductID] = useState(0);
  const value = useMemo(() => ({
    ratingAndCount,
    name,
    productID,
    setName,
    setRatingAndCount,
    setProductID,
  }), [ratingAndCount, name, productID]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
