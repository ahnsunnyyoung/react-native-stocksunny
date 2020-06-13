import { NavigationContainer, DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import rootReducer from './reducers';
import NewsDetail from './components/NewsDetail';
import CompanyDetail from './components/CompanyDetail';
import AddMyList from './components/AddMyList';
const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  
  const MyTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: '#e0b1cb',
      border: 'black',
    },
  };
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <NavigationContainer linking={LinkingConfiguration} theme= {MyTheme}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="NewsDetail" component={NewsDetail} options={{
                    headerTitleStyle: {color: "#e0aaff"},
                    headerStyle: {backgroundColor: '#3c096c'}
                    }}/>
              <Stack.Screen name="CompanyDetail" component={CompanyDetail} options={{
                    headerTitleStyle: {color: "#e0aaff"},
                    headerStyle: {backgroundColor: '#3c096c'}
                    }}/>
              <Stack.Screen name="AddMyList" component={AddMyList} options={{
                    headerTitleStyle: {color: "#e0aaff"},
                    headerStyle: {backgroundColor: '#3c096c'}
                    }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
