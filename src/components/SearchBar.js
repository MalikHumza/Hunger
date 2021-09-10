import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange, onEndEditing}) => {
  // console.log(Icon)
  return (
    <View>
      <View style={styles.searchbarStyle}>
        <Icon name="search" style={styles.iconStyle} />
        <TextInput
          placeholder="Search"
          style={styles.inputStyle}
          value={term}
          onChangeText={onTermChange}
          autoCapitalize="none"
          autoCorrect={false}
          onEndEditing={onEndEditing}
        />
      </View>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbarStyle: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
