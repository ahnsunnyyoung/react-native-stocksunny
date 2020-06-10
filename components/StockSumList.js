import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default class StockSumList extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <SingleRow />
        </View>
      </ScrollView>
    );
  }
}
class SingleRow extends React.Component {
  constructor(props) {
    super(props);
    const slides = [
      {
        changeP: '11 MB',
        symbol: 'Mobile ',
      },
      {
        changeP: '52 MB',
        symbol: 'Flight ',
      },
      {
        changeP: '14 MB',
        symbol: 'Great ',
      },
      {
        changeP: '45 MB',
        symbol: 'Best ',
      },
      {
        changeP: '33 MB',
        symbol: 'Bus ',
      },
      {
        changeP: '77 MB',
        symbol: 'Train ',
      },
    ];
    global.slides = slides;
  }
  render() {
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
              {global.slides.map((item, key) => (
                <TouchableOpacity style={styles.eachCard} key={key} onPress={() => { alert('Company ' + item.symbol + ' Clicked'); }}>
                  <Text
                    source={{
                      uri: item.uri,
                    }}
                    style={styles.graph}
                  >Graph</Text>
                  <View
                    style={styles.info}>
                    <Text style={styles.symbol}>
                      {item.symbol}
                    </Text>
                    <Text style={{ color: '#e0aaff' }}>⋮</Text>
                  </View>
                  <View
                    style={styles.changePView}>
                    <Text style={styles.changeP}>
                      {item.changeP}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  }
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