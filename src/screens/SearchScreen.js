import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('search', {
      params: {
        location: 'United States',
        limit: 50,
        term,
      },
    });
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={termChange => setTerm(termChange)}
        onEndEditing={() => searchApi()}
      />
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
