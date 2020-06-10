import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default NewsSumList = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'News', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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
