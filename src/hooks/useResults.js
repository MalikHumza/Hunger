import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hey....');
    try {
      const response = await yelp.get('search', {
        params: {
          location: 'United States',
          limit: 50,
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong ! Please try again later.');
    }
  };

  useEffect(() => {
    searchApi('pizza');
  }, []);

  return [searchApi, results, errorMessage];
};
