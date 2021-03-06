import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';


import HomeScreen from '../views/Home'
import NotificationScreen from '../views/Notification'
import PaymentScreen from '../views/Payment'
import ProfileScreen from '../views/Profile';
// import Login from '../views/Login';
// import LoginExample from '../../loginExample'
// import login2 from '../../login2'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Saude from '../views/agencies/Saude'
import Educacao from '../views/agencies/Educacao'
import Seguranca from '../views/agencies/Seguranca';
import Trabalho from '../views/agencies/Trabalho';
import Obras from '../views/agencies/Obras';
import Transporte from '../views/agencies/Transporte';
import Cultura from '../views/agencies/Cultura';
import Esporte from '../views/agencies/Esporte';


const Stack = createNativeStackNavigator()

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}
              // initialRouteName="login2"
        >
          {/* <Stack.Screen options={{headerShown: false}}
            name = "login2"
            component={login2}          
          />               */}
          <Stack.Screen 
            name="HomeStack"
            component={HomeScreen}
            options={({ navigation }) => {
                  return {
                  title: 'Zen Gov',
                  headerShown: true,  
                  headerRight: () => (
                      <View style={styles.screen}>
                          <Button
                              onPress={() => navigation.navigate('Payment')}
                              type="clear"
                              icon={<Ionicons name="cash-outline" size={35} color="white" />}
                          />                       
                      </View>
                  )}}        
              }           
          />
          <Stack.Screen
            name="PaymentStack"
            component={PaymentScreen}
            options={({ navigation }) => {
                      return {
                      title: 'Assinatura',  
                      headerRight: () => (
                              <Button
                                  onPress={() => navigation.navigate('Payment')}
                                  type="clear"
                                  name="Payment"
                                  icon={<Ionicons name="cash-outline" size={35} color="white" />}
                              />
                      )}}        
                  }
          />        
          <Stack.Screen options={{headerShown: true, title: "Sa??de"}}
            name="Saude"
            component={Saude}
          />
          <Stack.Screen options={{headerShown: true, title: "Educa????o"}}
            name="Educacao"
            component={Educacao}
          />
          <Stack.Screen options={{headerShown: true, title: "Seguran??a"}}
            name="Seguranca"
            component={Seguranca}
          />
          <Stack.Screen options={{headerShown: true, title: "Trabalho"}}
            name="Trabalho"
            component={Trabalho}
          />
          <Stack.Screen options={{headerShown: true, title: "Obras"}}
            name="Obras"
            component={Obras}
          />
          <Stack.Screen options={{headerShown: true, title: "Transporte"}}
            name="Transporte"
            component={Transporte}
          />
          <Stack.Screen options={{headerShown: true, title: "Cultura"}}
            name="Cultura"
            component={Cultura}
          />
          <Stack.Screen options={{headerShown: true, title: "Esporte e Lazer"}}
            name="Esporte"
            component={Esporte}
          />
        </Stack.Navigator>
    );
  }
  
export {HomeScreenNavigator};
  
const ProfileScreenNavigator = () => {
    return (
    <Stack.Navigator screenOptions={screenOptions}>
       <Stack.Screen options={{headerShown: true, title: "Perfil"}}
          name="ProfileStack"
          component={ProfileScreen}
          options={({ navigation }) => {
                    return {
                    title: 'Perfil',  
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Payment')}
                                type="clear"
                                icon={<Ionicons name="cash-outline" size={35} color="white" />}
                            />
                    )}}        
                }
        />      
    </Stack.Navigator>
    );
}

export {ProfileScreenNavigator};

const NotificationScreenNavigator = () => {
    return (
    <Stack.Navigator screenOptions={screenOptions}>
       <Stack.Screen
          name="NotificationStack"
          component={NotificationScreen}
          options={({ navigation }) => {
                    return {
                    title: 'Notifica????es',  
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Payment')}
                                type="clear"
                                icon={<Ionicons name="cash-outline" size={35} color="white" />}
                            />
                    )}}        
                }
        />
    </Stack.Navigator>
    );
}

export {NotificationScreenNavigator};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#00838F',
        
    },
    headerTintColor: '#FAF9FE',
    headerTitleStyle: {
        fontSize: 40,
        fontFamily: 'Permanent Marker Regular' 
    },   
}

const styles = StyleSheet.create({
  screen:{
      display:'flex',
      flexDirection: 'row',     
      paddingBottom: 10,
      paddingTop: 10
  },  
})

