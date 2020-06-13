import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Tile } from 'react-native-elements';

import NewsSumList from '../components/NewsSumList';

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Tile
        imageSrc={require('../assets/news_base.jpg')}
        title="Wide diversification is only required when investors do not understand what they are doing."
        titleStyle={{fontWeight:"300", color:"#FFF", fontStyle:"italic", fontSize:20}}
        height={200}
        featured
        caption="Warren Edward Buffett"
        captionStyle={{fontWeight:"200", color:"#e0aaff", fontStyle:"italic"}}
      />
      <NewsSumList/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
