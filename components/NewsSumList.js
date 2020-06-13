import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function NewsSumList() {
  const isLoading = useSelector(state => state.loading);
  const newsdata = useSelector(state => state.news.company);
  if(isLoading){
    return null;
  }else{
    return (
      <View style={styles.container}>
          {
            _.map(newsdata, news => (
              <ListItem
                key={news.id}
                leftAvatar={{ source: { uri: news.image } }}
                title={news.headline}
                titleStyle={{color:"#e0aaff"}}
                subtitle={"hi"}
                subtitleStyle={{color:"#e0aaff"}}
                containerStyle={{backgroundColor: 'black'}}
                bottomDivider
              />
            )
          )}
      </View>
    );
  }
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
})
