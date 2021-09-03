import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Home from './views/Home'
import Saude from './views/Saude'
import BottomTab from './components/BottomTab'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home"
            screenOptions={screenOptions}>
                <Stack.Screen name="Home"
                    options={{ title: "Zen Gov" }}> 
                    {props => (   
                        <Home />
                    )}                                
                </Stack.Screen>
                <Stack.Screen name="Saude"
                    options={{ title: "Saúde" }}> 
                    {props => (   
                        <Saude />
                    )}                                
                </Stack.Screen>          
            </Stack.Navigator> */}
            <BottomTab ></BottomTab>
        </NavigationContainer>        
    )
}


const screenOptions = {
    headerStyle: {
        backgroundColor: '#00838F',        
        
    },
    headerTintColor: '#FAF9FE',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}