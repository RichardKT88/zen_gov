import React from 'react'
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import {HomeScreenNavigator} from './CustomNavigation'
import { Button } from 'react-native-elements';
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
              case 'Perfil':
                    iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
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
        headerStyle: {
        backgroundColor: '#00838F',              
        
        },
        headerTintColor: '#FAF9FE',
        headerTitleStyle: {
            fontSize: 36,
            fontFamily: 'Permanent Marker Regular'         
        },
        tabBarShowLabel: false,
    })}>
        <BottomTab.Screen name="Back" component={Back}/>
        <BottomTab.Screen name="Home" component={HomeScreenNavigator} 
        options={({ navigation }) => {
                return {
                title: 'Zen Gov',  
                headerRight: () => (
                    <View style={styles.screen}>
                        <Button
                            onPress={() => navigation.navigate('PaymentScreen')}
                            type="clear"
                            icon={<Ionicons name="cash-outline" size={35} color="white" />}
                        />
                        <Button
                            onPress={() => navigation.navigate('NotificationScreen')}
                            type="clear"
                            icon={<Ionicons name="notifications-outline" size={35} color="white" />}
                        />
                    </View>
                )}}        
            }           
        />
        <BottomTab.Screen name="Perfil" component={Profile}
        options={({ navigation }) => {
                    return {
                    title: 'Perfil',  
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('NotificationScreen')}
                                type="clear"
                                icon={<Ionicons name="notifications-outline" size={35} color="white" />}
                            />
                    )}}        
                }
        /> 
        </BottomTab.Navigator>
)

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
    },  
})

