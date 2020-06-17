import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function ForexSumList() {
  const forex = useSelector(state => state.forex);
  return (
    <ScrollView>
      <View>
        <SingleRow forex={forex}/>
      </View>
    </ScrollView>
  );
  
}

function SingleRow({forex}) {
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
              <TouchableOpacity style={styles.eachCard} key={"EUR"}>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    EUR/USD
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                  <Text style={styles.changeP}>{parseFloat(forex['EUR']).toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.eachCard} key={"JPY"}>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    JPY/USD
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                  <Text style={styles.changeP}>{parseFloat(forex['JPY']).toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.eachCard} key={"AED"}>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    AED/USD
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                  <Text style={styles.changeP}>{parseFloat(forex['AED']).toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.eachCard} key={"CNY"}>
                <View
                  style={styles.info}>
                  <Text style={styles.symbol}>
                    CNY/USD
                  </Text>
                  <Text style={{ color: '#e0aaff' }}>⋮</Text>
                </View>
                <View
                  style={styles.changePView}>
                  <Text style={styles.changeP}>{parseFloat(forex['CNY']).toFixed(2)}</Text>
                </View>
              </TouchableOpacity>
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
  symbol: { color: '#dbcdf0', fontWeight: '500', fontSize:20, margin: 5 },
  changePView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeP: { color: '#e0aaff', fontWeight: '200', fontSize:18, margin: 5  }
})