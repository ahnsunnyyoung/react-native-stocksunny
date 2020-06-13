import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';

function StockItem({stock}){
  return(
      <ListItem
        key={stock.id}
        leftAvatar={{ source: { uri: stock.profile.logo } }}
        title={<Text style={styles.headline}>{stock.ticker}</Text>}
        titleStyle={{color:"#e0aaff"}}
        subtitle={stock.profile.name}
        subtitleStyle={{color:"#e0aaff"}}
        containerStyle={{backgroundColor: 'black'}}
        bottomDivider
      />  
  );
}

export default function AddMyList() {
  const stocks = useSelector(state => state.stocks);

  return (
    <View style={styles.container}>
        {_.map(stocks, stock => (<StockItem key={stock.ticker} stock={stock}/>))}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 15
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e0aaff',
    backgroundColor: '#3c096c',
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
  date:{
    fontSize:14,
    color: '#e0aaff',
    fontWeight: "100",
  }
})
