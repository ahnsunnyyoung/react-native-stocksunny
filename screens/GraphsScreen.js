import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import CandleStick from '../components/CandleStick';
import { loadCandle } from '../actions';

export default function GraphsScreen() {
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("useEffect")
    dispatch(loadCandle())

  },[])
  const candle = useSelector(state => state.candle);
  if(isLoading){
    console.log("loading")
    return (
      <Text style={styles.loading}>Loading...</Text>
      // <AnimatedLoader
      //   visible={true}
      //   overlayColor="rgba(0,0,0,0.75)"
      //   source={require("../assets/1124-loader.json")}
      //   animationStyle={styles.lottie}
      //   speed={1}
      // />
    );
  }else{
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <CandleStick type={"USD"} candle={candle.usd}/>
        <CandleStick type={"JPY"} candle={candle.jpy}/>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loading: {
    color:'#fff'
  }
});
