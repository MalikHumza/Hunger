import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp';

const Details = ({route : {params}}) => {
    const [result, setResult] = useState(null);
    const {id} = params;
    console.log(id);
    console.log(result);

    const getResult = async(id)=> {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, [])
    return (
        <View>
            <Text>Deatils Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Details
