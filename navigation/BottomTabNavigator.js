import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Button } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import GraphsScreen from '../screens/GraphsScreen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerStyle: {
      backgroundColor: '#3c096c',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "500",
      fontSize: 20
    },
    headerTitle: getHeaderTitle(route),
    headerLeft: () => (
      <Feather name="menu" size={24}
        style={{ marginLeft: 10 }}
        onPress={() => alert('This is a menu!')}
        color="#fff"
      />
    ),
    headerRight: () => (
      <Button
        onPress={() => alert('This is a Login!')}
        style={{fontWeight: "300" }}
        title="Login"
        color="#fff"
      />
    )});

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => <FontAwesome focused={focused} name="newspaper-o" 
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
          tabBarIcon: ({ focused }) => <Feather focused={focused} name="home" 
            size={30}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>,
        }}
      />
      <BottomTab.Screen
        name="Graphs"
        component={GraphsScreen}
        options={{
          title: 'Graphs',
          tabBarIcon: ({ focused }) => <Entypo focused={focused} name="line-graph" 
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
    case 'Graphs':
      return 'Graphs';
  }
}
