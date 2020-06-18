import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Entypo, FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ForexScreen from '../screens/ForexScreen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {color: "#e0aaff"},
    headerStyle: {backgroundColor: '#3c096c'},
    headerLeft: () => (<AntDesign name="user" style={{marginLeft:20}} size={24} color="#e0aaff" onPress={() => alert('This is a menu!')}/>)
  })
  

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => <FontAwesome 
            name="newspaper-o" 
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'StockSunny',
          tabBarIcon: ({ focused }) => <Feather 
            name="home" 
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>,
        }}
      />
      <BottomTab.Screen
        name="Forex"
        component={ForexScreen}
        options={{
          title: 'Forex',
          tabBarIcon: ({ focused }) => <Entypo 
            name="line-graph" 
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Stock Sunny';
    case 'News':
      return 'News';
    case 'Forex':
      return 'Forex';
  }
}

const styles = StyleSheet.create({
  header: {
  },
});