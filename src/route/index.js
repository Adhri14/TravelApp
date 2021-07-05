import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {DetailScreen, Home, Menu, Notif, Setting} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notif" component={Notif} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
