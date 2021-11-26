import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import Login from '../views/Login';
// import LoginExample from '../../loginExample'
import Login from '../views/Login';
import TabScreen from './AppStack'

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '785661588633-nif0u2kqeldtp85rgfotbhq51sf76no5.apps.googleusercontent.com',
    });
  
  }, []);

    return (
        <AuthStack.Navigator initialRouteName={"Login"}>
            <AuthStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false  }}
            /> 
            <AuthStack.Screen
            name="HomeAuth"
            component={TabScreen}
            options={{ headerShown: false  }}
            /> 
        </AuthStack.Navigator>
    )
 };

 export default AuthStackScreen;