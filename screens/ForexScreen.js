import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import AnimatedLoader from "react-native-animated-loader";

import CandleStick from '../components/CandleStick';
import { loadCandle } from '../actions';
import ForexSumList from '../components/ForexSumList'

export default function ForexScreen() {
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
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(0,0,0,0.75)"
        source={require("../assets/1124-loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }else{
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <ForexSumList/>
        <View style={styles.candle}>
          <CandleStick type={"USD"} candle={candle.usd}/>
        </View>
        <View style={styles.candle}>
          <CandleStick type={"JPY"} candle={candle.jpy}/>
        </View>

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
  },
  candle: {
    marginTop: -30
  }
});
