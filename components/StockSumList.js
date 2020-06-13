import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import _ from 'lodash';
import { useSelector } from 'react-redux';

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

function SingleRow({stocks}) {
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
              <TouchableOpacity style={styles.eachCard} key={stock.ticker} onPress={() => { alert('Company ' + item.symbol + ' Clicked'); }}>
                <Text
                  style={styles.graph}
                >Graph</Text>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    {stock.ticker}
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                  <Text style={styles.changeP}>
                    {stock.per}%({stock.diff})
                  </Text>
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
  graph: { color: '#e0aaff', width: 70, height: 40, margin: 10 },
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