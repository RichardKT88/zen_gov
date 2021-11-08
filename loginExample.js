import React, { Component } from "react";
import { 
    Text, 
    StyleSheet, 
    View,
    Image, 
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
// import { app } from '../config/firebase';
// import auth from '@react-native-firebase/auth';
// import { anonymousProvider, facebookProvider } from "./src/config/authMethods";
// import socialMediaAuth from "./src/service/auth";



function Login () {
  
    signIn =({navigation}) => {
        auth()
        .signInAnonymously()
        .then(() => navigation.navigate('HomeScreen'))
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
            }

            console.error(error);
        });
    }
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    }
   
    //render() {
        return (
            <View style={styles.screen}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}>Zen Gov</Text>
                    
                </View>                
                <Image source={require('./src/assets/images/logo.png')}/>

                <TouchableOpacity style={styles.buttonDefault} onPress={() => this.signIn(navigation)}>
                    <Text style={styles.subtitle}>Entrar Anônimo Teste</Text>
                </TouchableOpacity>               
               
                 <Text style={styles.title}>Ou</Text>
                
                <TouchableOpacity style={styles.buttonDefault} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.subtitle}>
                        <Ionicons style={styles.iconDefault} name="logo-facebook" />
                        Login com o Facebook Test
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonDefault} onPress={""}>
                    <Text style={styles.subtitle}>
                        <Ionicons style={styles.iconDefault} name="logo-google" />
                        Login com o Google Test
                    </Text>
                </TouchableOpacity>
                
            </View>
           
           
        )

    }
//}

export default Login;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2E2D33',
    },
    titleBackground:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        backgroundColor: '#00838F',
        width: '100%',
        marginTop: -100,
        marginBottom: 20        
    },  
    title:{
        color:'#fff',
        fontFamily: 'Permanent Marker Regular',
        fontSize: 50,
    },
    subtitle:{
        color:'#fff',
        fontSize: 25,       
    },
    iconDefault: {
        fontSize: 30,
        // color:'pink',
        // backgroundColor: 'yellow',
       
    },
    buttonDefault: {
        height: 45,
        backgroundColor: '#00838F',
        width: 350,
        borderRadius: 25,
        marginTop: 30,
        justifyContent:'center',
        alignItems:'center',
    }
})

