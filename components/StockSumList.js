import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-svg-charts';
import { useNavigation } from '@react-navigation/native';

export default function StockSumList() {
  const stocks = useSelector(state => state.stocks);
  return (
    <ScrollView>
      <View>
        <SingleRow stocks={stocks}/>
      </View>
    </ScrollView>
  );
  
}

function selectPercent(per, diff){
  if(per<0){
      return(
        <Text style={{color:'#D80A0A'}}>
          {per}%({diff})
        </Text>
      );
  }else{
      return(
        <Text style={{color:'#0AA5D8'}}>
          {per}%({diff})
        </Text>
      );
  }
}

function SingleRow({stocks}) {
  const navigation = useNavigation();
  return (
    <View>
      <Card 
        containerStyle={{
          backgroundColor: 'black',
          padding: 10,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          borderWidth: 0
        }}>
        <View style={styles.row}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {_.map(stocks, stock => 
              <TouchableOpacity style={styles.eachCard} key={stock.ticker} 
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('CompanyDetail', {
                    companyId: stock.ticker
                  });
                }}>
                <View style={styles.graph}>
                  <LineChart
                    style={{ height: 30 }}
                    data={stock.trendsCalendar}
                    svg={{ stroke: '#e0aaff' }}
                    contentInset={{ top: 20, bottom: 20 }}
                  >
                  </LineChart>
                </View>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    {stock.ticker}
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                    {selectPercent(stock.percent, stock.diff)}
                  
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', width: '100%' },
  eachCard: { margin: 5 },
  graph: { width: 70, height: 40, margin: 10 },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbol: { color: '#dbcdf0', fontWeight: '500' },
  changePView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeP: { color: '#e0aaff', fontWeight: '200' }
})