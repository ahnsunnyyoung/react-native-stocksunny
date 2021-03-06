import { StyleSheet, View, RefreshControl, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StockSumList from '../components/StockSumList';
import MyList from '../components/MyList';
import NewsSumList from '../components/NewsSumList';
import { loadStocks } from '../actions';
import AnimatedLoader from "react-native-animated-loader";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function HomeScreen({navigation}) {
  const isLoading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("useEffect")
    dispatch(loadStocks())

  },[])
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(loadStocks())
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

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
    console.log("not loading")

    return (
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl tintColor='#fff' refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={styles.container} contentContainerStyle={styles.contentContainer}>
            <StockSumList/>
            <MyList/>
            <NewsSumList navigation={navigation}/>
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
  },
  loading: {
    color:'#fff'
  }
});
