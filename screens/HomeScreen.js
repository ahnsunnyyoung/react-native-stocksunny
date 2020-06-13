import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import StockSumList from '../components/StockSumList';
import MyList from '../components/MyList';
import NewsSumList from '../components/NewsSumList';
import { loadStock } from '../actions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("useEffect")
    dispatch(loadStock('AAPL'))
    dispatch(loadStock('MSFT'))
    dispatch(loadStock('AMZN'))
    dispatch(loadStock('GOOG'))
    dispatch(loadStock('TSLA'))
  })
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <StockSumList/>
        <Divider />
        <MyList/>
        <Divider />
        <NewsSumList/>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
