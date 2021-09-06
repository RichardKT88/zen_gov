import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 

import Home from '../views/Home';
import Profile from '../views/Profile';
import Back from '../views/Back';

import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTab = createBottomTabNavigator()

export default props => (
    <BottomTab.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
              case 'Back':
                    iconName = focused
                        ? 'ios-play-back-sharp'
                        : 'ios-play-back-outline';
                    break;
              case 'Home':
                    iconName = focused
                        ? 'ios-home-sharp'
                        : 'ios-home-outline';
                    break;
              case 'Profile':
                    iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    break;

              default:
                    break;
              
          }        

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00838F',                    
        tabBarStyle:{
            backgroundColor: '#4B4952',
        },
        headerStyle: {
        backgroundColor: '#00838F',              
        
        },
        headerTintColor: '#FAF9FE',
        headerTitleStyle: {
            fontSize: 36,
            fontFamily: 'Permanent Marker Regular'         
        },
    })}>
        <BottomTab.Screen name="Back" component={Back}/>
        <BottomTab.Screen name="Home" component={Home} options={{title: 'Zen Gov'}} />
        <BottomTab.Screen name="Profile" component={Profile} /> 
        </BottomTab.Navigator>
)

