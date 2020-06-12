import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
import { Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

export default function MyList() {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]

  return (
    <View style={styles.container}>
      <Card containerStyle={{borderRadius:10, backgroundColor: '#3c096c', borderWidth: 0}}>
        <Collapse style={styles.collapse}>
            <CollapseHeader>
                <View style={styles.flex}>
                    <View style={styles.left}>
                        <Text style={styles.title}>My List</Text>
                        <Text style={styles.subtitle}>5 symbols</Text>
                    </View>
                    <View style={styles.right}>
                        <Ionicons name="ios-arrow-dropdown" size={24} color="#e0aaff" />
                    </View>
                </View>
            </CollapseHeader>
            <CollapseBody style={styles.collapsebody}>
              {
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    titleStyle={{color:"#e0aaff"}}
                    subtitle={l.subtitle}
                    subtitleStyle={{color:"#e0aaff"}}
                    containerStyle={{width: "100%", backgroundColor: '#3c096c'}}
                    bottomDivider
                  />
                ))
              }
              <View style={styles.flex}>
                <Button
                  icon={
                    <AntDesign name="pluscircleo" size={15} style={{marginRight:5}} color="#e0aaff" />
                  }
                  type="clear"
                  title="add symbol"
                  titleStyle={{color:"#e0aaff", fontSize:15}}
                />
              </View>
            </CollapseBody>
        </Collapse>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 10
  },
  flex: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: 'row',
  },
  collapse: {
    alignItems: "center",
  },
  collapsebody: {
    alignItems: "center",
  },
  left: {
    marginLeft: 30,
    width: "70%"
  },
  right: {
    width: "30%"
  },
  title: {
   color: "#e0aaff",
   fontWeight: "bold",
   fontSize: 15
  },
  subtitle: {
    color: "#e0aaff",
    fontSize: 13,
    marginTop: 5
  },
})
