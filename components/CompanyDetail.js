import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { LineChart } from 'react-native-svg-charts';
import { Entypo } from '@expo/vector-icons'; 

import CompanyStick from './CompanyStick';

function selectPercent(per, diff){
  if(per<0){
      return(
        <Text style={{color:'#D80A0A', fontSize: 20}}>
          {diff} ({per}%)
        </Text>
      );
  }else{
      return(
        <Text style={{color:'#2b9348', fontSize: 20}}>
          +{diff} (+{per}%)
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
        <CompanyStick type={stock.ticker} candle={stock.symbolCalendar[1]}/>
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
            <Text style={styles.price}>{stock.c}</Text>
            {selectPercent(stock.percent, stock.diff)}
          
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Previous Close</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{stock.pc}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.bold}>Open</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{stock.o}</Text>
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
    marginTop:-20,
    display: "flex",
    flexDirection: 'row',
  },
  container:{
    marginTop: 10,
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
    fontSize: 18
  },
  content: {
    color: '#fff',
    fontWeight: "200",
    fontSize: 18
  },
  url: {
    color: '#fff',
    fontWeight: "200",
    fontSize: 15
  },
  changePView: {
    marginTop: 10,
    alignSelf: "center"
  },
  price: {
    color: "#fff",
    fontSize: 20
  },
  graph: {
    marginTop: 30,
    height: 180
  }
})
