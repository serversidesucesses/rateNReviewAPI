import React, { useState } from 'react';
import axios from 'axios';

export default function RatingBreakdown() {
  const [overallRating, setOverallRating] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get(``)
  }, []);
}

