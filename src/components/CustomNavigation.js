import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../views/Home'
import Notification from '../views/Notification'
import Payment from '../views/Payment'
import Profile from '../views/Profile';
import Login from '../views/Login';
import LoginExample from '../../loginExample'
import LoginExample2 from '../../login2'

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
      <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen options={{headerShown: false}}
            name = "LoginExample2"
            component={LoginExample2}          
          />              
         <Stack.Screen 
          name="Home"
          component={Home}
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
          name="Payment"
          component={Payment}
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
         <Stack.Screen options={{headerShown: true, title: "Saúde"}}
          name="Saude"
          component={Saude}
        />
         <Stack.Screen options={{headerShown: true, title: "Educação"}}
          name="Educacao"
          component={Educacao}
        />
         <Stack.Screen options={{headerShown: true, title: "Segurança"}}
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
          name="Profile"
          component={Profile}
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
          name="Notification"
          component={Notification}
          options={({ navigation }) => {
                    return {
                    title: 'Notificações',  
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

