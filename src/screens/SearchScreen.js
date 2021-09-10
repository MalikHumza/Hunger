import React,{useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar term={term} onTermChange={termChange => setTerm(termChange)} onEndEditing={() => console.log('Submitted')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
