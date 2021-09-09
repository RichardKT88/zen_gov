import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Saude from '../views/Saude'
import Educacao from '../views/Educacao'
import HomeScreen from '../views/Home'
import NotificationScreen from '../views/Notification'
import PaymentScreen from '../views/Payment'
import ProfileScreen from '../views/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator()

const HomeScreenNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
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
        <Stack.Screen options={{headerShown: true, title: "Notificação"}}
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen options={{headerShown: true, title: 'Assinatura'}}
          name="PaymentScreen"
          component={PaymentScreen}
        />
         <Stack.Screen options={{headerShown: true, title: "Saúde"}}
          name="Saude"
          component={Saude}
        />
         <Stack.Screen options={{headerShown: true, title: "Educação"}}
          name="Educacao"
          component={Educacao}
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
                                onPress={() => navigation.navigate('NotificationScreen')}
                                type="clear"
                                icon={<Ionicons name="notifications-outline" size={35} color="white" />}
                            />
                    )}}        
                }
        />
        {/* <Stack.Screen
        name="NestedScreen2"
        component={NestedScreen}
        /> */}
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

