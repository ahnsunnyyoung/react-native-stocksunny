import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { LineChart } from 'react-native-svg-charts';
import { Entypo } from '@expo/vector-icons'; 

function selectPercent(per, diff){
  if(per<0){
      return(
        <Text style={{color:'#D80A0A', fontSize: 20}}>
          {per}%({diff})
        </Text>
      );
  }else{
      return(
        <Text style={{color:'#0AA5D8', fontSize: 20}}>
          {per}%({diff})
        </Text>
      );
  }
}

export default function CompanyDetail({ route }){
  const { companyId } = route.params;
  const stocks = useSelector(state => state.stocks);
  const stock = stocks[companyId];
  const { profile } = stock;

  return(
    <View>
      <View style={styles.graph}>
        <LineChart
          style={{ height: 150 }}
          data={stock.symbolCalendar[0]}
          svg={{ stroke: '#e0aaff' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
        </LineChart>
      </View>
      <Card containerStyle={{ backgroundColor:"black", borderWidth:0 }}>
        <View style={styles.titleContainer}>
          <View style={styles.left}>
            <Avatar
              size="large"
              rounded
              source={{uri:profile.logo}}
            />
          </View>
          <View style={styles.right}>
            <Text style={styles.titleText}>{profile.name}</Text>
          </View>
        </View>
        <View
          style={styles.changePView}>
            {selectPercent(stock.percent, stock.diff)}
          
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Country</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{profile.country}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Country</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{profile.country}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Currency  </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{profile.currency}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>IPO  </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{profile.ipo}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Entypo name="phone" size={24} color='#e0aaff' />
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{profile.phone}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Website</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.url}>{profile.weburl}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer:{
    display: "flex",
    flexDirection: 'row',
  },
  container:{
    marginTop: 20,
    display: "flex",
    flexDirection: 'row',
  },
  left:{
    width:"30%",
  },
  right:{
    width: "70%",
    alignSelf:"flex-end"
  },
  titleText:{
    color: '#e0aaff',
    fontSize: 30,
    fontWeight: "800",
    fontStyle: "italic"
  },
  bold:{
    color: '#e0aaff',
    fontWeight: "400",
    fontSize: 20
  },
  content: {
    color: '#e0aaff',
    fontWeight: "200",
    fontSize: 20
  },
  url: {
    color: '#e0aaff',
    fontWeight: "200",
    fontSize: 15
  },
  changePView: {
    marginTop: 15,
    alignSelf: "center"
  }
})
