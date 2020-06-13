import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StockSumList from '../components/StockSumList';
import MyList from '../components/MyList';
import NewsSumList from '../components/NewsSumList';
import { loadStocks } from '../actions';
import AnimatedLoader from "react-native-animated-loader";

export default function HomeScreen() {
  const isLoading = useSelector(state => state.loading);

  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("useEffect")
    dispatch(loadStocks())

  },[])

  if(isLoading){
    console.log("loading")
    return (
      <Text style={{color:"#FFF"}}>Loading...</Text>
      // <AnimatedLoader
      //   visible={true}
      //   overlayColor="rgba(0,0,0,0.75)"
      //   source={require("../assets/1124-loader.json")}
      //   animationStyle={styles.lottie}
      //   speed={1}
      // />
    );
  }else{
    console.log("not loading")

    return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <StockSumList/>
            <MyList/>
            <NewsSumList/>
          </ScrollView>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  lottie: {
    width: 100,
    height: 100
  }
});
