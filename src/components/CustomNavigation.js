import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Saude from '../views/Saude'
import Educacao from '../views/Educacao'
import HomeScreen from '../views/Home'
import NotificationScreen from '../views/Notification'
import PaymentScreen from '../views/Payment'

const Stack = createNativeStackNavigator()

const HomeScreenNavigator = () => {
    return (
      <Stack.Navigator >
         <Stack.Screen options={{headerShown: false}}
          name="HomeStack"
          component={HomeScreen}
        />
        <Stack.Screen options={{headerShown: false}}
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen options={{headerShown: false}}
          name="PaymentScreen"
          component={PaymentScreen}
        />
         <Stack.Screen options={{headerShown: false}}
          name="Saude"
          component={Saude}
        />
         <Stack.Screen
          name="Educacao"
          component={Educacao}
        />
      </Stack.Navigator>
    );
  }
  
export {HomeScreenNavigator};
  
const ProfileScreenNavigator = () => {
    return (
    <Stack.Navigator >
        <Stack.Screen
            name="Screen2"
            component={Screen2}
        />
        <Stack.Screen
        name="NestedScreen2"
        component={NestedScreen}
        />
    </Stack.Navigator>
    );
}
    
export {ProfileScreenNavigator};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#00838F',        
        
    },
    headerTintColor: '#FAF9FE',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

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