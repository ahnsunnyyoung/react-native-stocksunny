import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { LineChart } from 'react-native-svg-charts';

export default function CompanyDetail({ route }){
  const { companyId } = route.params;
  const stocks = useSelector(state => state.stocks);
  const stock = stocks[companyId];
  const { profile } = stock;

  return(
    <View>
        <View style={styles.graph}>
            <LineChart
                style={{ height: 200 }}
                data={stock.trendsCalendar}
                svg={{ stroke: '#e0aaff' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>
        </View>
        <Tile
            imageSrc={{uri: profile.logo}}
            title="Wide diversification is only required when investors do not understand what they are doing."
            titleStyle={{fontWeight:"300", color:"#FFF", fontStyle:"italic", fontSize:20}}
            height={400}
            width={400}
            featured
            caption="Warren Edward Buffett"
            captionStyle={{fontWeight:"200", color:"#e0aaff", fontStyle:"italic"}}
        />
        <Card containerStyle={{backgroundColor:"black", borderWidth:0}} title={companyId} titleStyle={{fontSize:20,color:"#e0aaff"}}>
        <View>
            <Text style={styles.summary}>{companyId}</Text>
        </View>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  date:{
    marginTop:20,
    alignSelf:"flex-end",
    fontWeight: "100",
    color: '#e0aaff',
    fontSize:15,
  },
  summary:{
    marginTop:20,
    fontSize:18,
    color: '#e0aaff',
    fontWeight: "300",
  }
})
