import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';

function NewsItem(news){
  var {news}=news;
  var date = new Date(news.datetime*1000);
  return(
      <ListItem
        key={news.id}
        leftAvatar={{ source: { uri: news.image } }}
        title={<Text style={styles.headline}>{news.headline}</Text>}
        titleStyle={{color:"#e0aaff"}}
        subtitle={<Text style={styles.date}>date: {(date.getMonth()+1) + '월 '+ date.getDate() + '일'}</Text>}
        subtitleStyle={{color:"#e0aaff"}}
        containerStyle={{backgroundColor: 'black'}}
        bottomDivider
      />  
  );
}

export default function NewsSumList() {
  const newsdata = useSelector(state => state.news);

  return (
    <View style={styles.container}>
        {_.map(newsdata, news => (<NewsItem key={news.id} news={news}/>))}
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
