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
import Login from '../../login2'

import Ionicons from 'react-native-vector-icons/Ionicons';

import Saude from '../views/agencies/Saude';
import Educacao from '../views/agencies/Educacao'
import Seguranca from '../views/agencies/Seguranca';
import Trabalho from '../views/agencies/Trabalho';
import Obras from '../views/agencies/Obras';
import Transporte from '../views/agencies/Transporte';
import Cultura from '../views/agencies/Cultura';
import Esporte from '../views/agencies/Esporte';

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ title: "Sign In" }}
    /> 
  </AuthStack.Navigator>
);


const HomeStack = createNativeStackNavigator();
const HomeScreenNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={screenOptions}
              // initialRouteName="login2"
        >
          {/* <Stack.Screen options={{headerShown: false}}
            name = "login2"
            component={login2}          
          />               */}
          <HomeStack.Screen 
            name="HomeStack"
            component={HomeScreen}
            options={({ navigation }) => {
                  return {
                  title: 'Zen Gov',
                  headerShown: true,  
                  headerRight: () => (
                      <View style={styles.screen}>
                          <Button
                              onPress={() => navigation.navigate('PaymentStack')}
                              type="clear"
                              icon={<Ionicons name="cash-outline" size={35} color="white" />}
                          />                       
                      </View>
                  )}}        
              }           
          />
          <HomeStack.Screen
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
          <HomeStack.Screen options={{headerShown: true, title: "Saúde"}}
            name="Saude"
            component={Saude}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Educação"}}
            name="Educacao"
            component={Educacao}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Segurança"}}
            name="Seguranca"
            component={Seguranca}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Trabalho"}}
            name="Trabalho"
            component={Trabalho}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Obras"}}
            name="Obras"
            component={Obras}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Transporte"}}
            name="Transporte"
            component={Transporte}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Cultura"}}
            name="Cultura"
            component={Cultura}
          />
          <HomeStack.Screen options={{headerShown: true, title: "Esporte e Lazer"}}
            name="Esporte"
            component={Esporte}
          />
        <HomeStack.Screen
          name="NotificationStack"
          component={NotificationScreen}
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
        <HomeStack.Screen options={{headerShown: true, title: "Perfil"}}
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
        </HomeStack.Navigator>
    );
  }

const NotificationStack = createNativeStackNavigator();
const NotificationScreenNavigator = () => {
    return (
    <NotificationStack.Navigator screenOptions={screenOptions}>
         <NotificationStack.Screen
          name="NotificationStack"
          component={NotificationScreen}
          options={({ navigation }) => {
                    return {
                    title: 'Notificações',  
                    headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('PaymentStack')}
                                type="clear"
                                icon={<Ionicons name="cash-outline" size={35} color="white" />}
                            />
                    )}}        
                }
        />
    </NotificationStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
const ProfileScreenNavigator = () => {
    return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
        <ProfileStack.Screen options={{headerShown: true, title: "Perfil"}}
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
    </ProfileStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const TabScreen = () => (
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

export default () => (
  <NavigationContainer>
      <TabScreen />
  </NavigationContainer>
);
    

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

