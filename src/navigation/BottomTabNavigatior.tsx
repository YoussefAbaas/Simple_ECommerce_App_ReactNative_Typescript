/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, Home, Profile, Settings} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entype from 'react-native-vector-icons/Entypo';
import {BottomTabsParamList} from './NavigationTypes';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size}) => (
            <AntDesign name="home" size={size} color={'#C0C0C0'} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size}) => (
            <Entype name="menu" size={size} color={'#C0C0C0'} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({size}) => (
            <AntDesign name="shoppingcart" size={size} color={'#C0C0C0'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size}) => (
            <AntDesign name="user" size={size} color={'#C0C0C0'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
