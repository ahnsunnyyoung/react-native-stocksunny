import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function NewsDetail({ route }){
  const { newsId } = route.params;
  const newsdata = useSelector(state => state.newsSearch);
  const news = newsdata[newsId];
  var date = new Date(news.datetime*1000);

  return(
    <Card containerStyle={{backgroundColor:"black", borderWidth:0}} title={news.headline} titleStyle={{fontSize:20,color:"#e0aaff"}}>
      <View>
        <Image
          style={styles.image}
          resizeMode="cover"
          style={{ width: 315, height: 200 }}
          source={{ uri: news.image }}
        />
        <Text style={styles.summary}>{news.summary}</Text>
        <Text style={styles.date}>date: {(date.getMonth()+1) + '월 '+ date.getDate() + '일'}</Text>
      </View>
    </Card>
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
