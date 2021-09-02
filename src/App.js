import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './views/Home'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={screenOptions}>
                <Stack.Screen name="Home"
                    options={{ title: "Zen Gov" }}> 
                    {props => (   
                        <Home />
                    )}                                
                </Stack.Screen>       
            </Stack.Navigator>
        </NavigationContainer>        
    )
}


const screenOptions = {
    headerStyle: {
        backgroundColor: '#00838F',
        
    },
    headerTintColor: '#FAF9FE',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}