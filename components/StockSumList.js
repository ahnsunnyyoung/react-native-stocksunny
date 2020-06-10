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
        backgroundColor: '#20d2bb',
      },
      {
        changeP: '52 MB',
        symbol: 'Flight ',
        backgroundColor: '#febe29',
      },
      {
        changeP: '14 MB',
        symbol: 'Great ',
        backgroundColor: '#22bcb5',
      },
      {
        changeP: '45 MB',
        symbol: 'Best ',
        backgroundColor: '#3395ff',
      },
      {
        changeP: '33 MB',
        symbol: 'Bus ',
        backgroundColor: '#f6437b',
      },
      {
        changeP: '77 MB',
        symbol: 'Train ',
        backgroundColor: '#febe29',
      },
    ];
    global.slides = slides;
  }
  render() {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: '#dbcdf0',
            padding: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
          }}>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {global.slides.map((item, key) => (
                <TouchableOpacity style={{ margin: 5 }} key={key} onPress={() => { alert('Company ' + item.symbol + ' Clicked'); }}>
                  <Text
                    source={{
                      uri: item.uri,
                    }}
                    style={{ width: 70, height: 40, margin: 10 }}
                  >Graph</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#3c096c', fontWeight: '500' }}>
                      {item.symbol}
                    </Text>
                    <Text style={{ color: '#5a189a' }}>⋮</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#5a189a', fontWeight: '200' }}>
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