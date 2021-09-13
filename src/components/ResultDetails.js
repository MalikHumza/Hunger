import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ResultDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 15,
  },
});

export default ResultDetails;
