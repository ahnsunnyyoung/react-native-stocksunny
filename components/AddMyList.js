import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import _, { forEach } from 'lodash';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import { select, addList } from '../actions'

function AddMyList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const stocks = useSelector(state => state.stocks);
  const items = [ "AAPL", "TSLA", "AMZN", "FB", "MSFT", "AAL"];

  function getList(){
    const companyList = [];
    const result = [];
    _.map(stocks,stock => (companyList.push(stock)))
    companyList.forEach(i => {
      if(i.selected){
        result.push(i)
      }
    })
    console.log("result", result)
    dispatch(addList(result));
  }

  const onPress = item => {
    console.log("press in")
    items.forEach(i => {
      if (item === i) {
        console.log("select함수 하고 심볼은",i)
        dispatch(select(i))
      }
    })
  };

  function StockItem({item}){
    var stock = stocks[item]
    console.log(stock.ticker," 는 선택 ",stock.selected)
    return (
      <ListItem
        onPress={() => onPress(item)}
        style={[stock.selected ? styles.selected : styles.normal]}
        key={stock.ticker}
        leftAvatar={{ source: { uri: stock.profile.logo } }}
        title={<Text style={styles.headline}>{stock.ticker}</Text>}
        titleStyle={{color:"#e0aaff"}}
        subtitle={stock.profile.name}
        subtitleStyle={{color:"#e0aaff"}}
        containerStyle={{backgroundColor: 'black'}}
        bottomDivider
      />  
    );
  };

  return (
    <View style={styles.container}>
        {_.map(items, item => (<StockItem key={item} item={item}/>))}
        <View style={styles.button}>
          <Button
            icon={<AntDesign name="pluscircleo" size={24} color="white" />}
            title="Add"
            titleStyle={{color:"white", marginLeft:10, fontSize: 30}}
            type="clear"
            onPress = {() => {
              getList()
              navigation.goBack()
            }}
          />
        </View>
    </View>
  );
}

export default AddMyList;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#fff',
    marginLeft: 0,
    paddingLeft: 18,
  },
  normal: {},
  container: {
   flex: 1,
   paddingTop: 15
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headline:{
    fontWeight: "200",
    color: '#e0aaff',
    fontSize:18,
  },
  button: {
    marginTop: 20
  }
})
