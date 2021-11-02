import React, { Component } from "react";
import { 
    Text, 
    StyleSheet, 
    View,
    Image, 
    TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}>Zen Gov</Text>
                    
                </View>                
                <Image source={require('../assets/images/logo.png')}/>

                <TouchableOpacity style={styles.buttonDefault} onPress={""}>
                    <Text style={styles.subtitle}>Entrar Anônimo</Text>
                </TouchableOpacity>               
               
                 <Text style={styles.title}>Ou</Text>
                
                <TouchableOpacity style={styles.buttonDefault} onPress={""}>
                    <Text style={styles.subtitle}>
                        <Ionicons style={styles.iconDefault} name="logo-facebook" />
                        Login com o Facebook
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonDefault} onPress={""}>
                    <Text style={styles.subtitle}>
                        <Ionicons style={styles.iconDefault} name="logo-google" />
                        Login com o Google
                    </Text>
                </TouchableOpacity>
                
            </View>
           
           
        )

    }
}

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

