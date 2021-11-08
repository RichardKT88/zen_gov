import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import {HomeScreenNavigator, ProfileScreenNavigator, NotificationScreenNavigator} from './CustomNavigation'
import login2 from '../../login2';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
              case 'Notification':
                    iconName = focused
                        ? 'notifications-sharp'
                        : 'notifications-outline';
                    break;
              case 'Home':
                    iconName = focused
                        ? 'ios-home-sharp'
                        : 'ios-home-outline';
                    break;
              case 'Perfil':
                    iconName = focused 
                    ? 'person-circle-sharp' 
                    : 'person-circle-outline';
                    break;  

              default:
                    break;
              
          }
          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: '#00838F',                    
        tabBarStyle:{
            backgroundColor: '#4B4952',
            height: 55
        },        
        tabBarShowLabel: false,        
    })}>
            <Tab.Screen 
                name="Notification" 
                component={NotificationScreenNavigator}
                options={{headerShown: false}}                
            />              
            <Tab.Screen 
                name="Home" 
                component={HomeScreenNavigator} 
                options={{headerShown: false}}
            />
            <Tab.Screen 
                name="Perfil" 
                component={ProfileScreenNavigator} 
                options={{headerShown: false}}
            />
             
    </Tab.Navigator>
)