import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const Details = ({route: {params}}) => {
  const [result, setResult] = useState(null);
  const {id} = params;

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={humza => humza}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        borderRadius: 5,
        marginHorizontal: 100,
        marginVertical: 20,
    }
});

export default Details;
