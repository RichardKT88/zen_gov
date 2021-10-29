import React, { Component } from "react";
import { 
    ImageBackground, 
    Text, 
    StyleSheet, 
    View,
    Image, 
    TouchableOpacity,
    Alert 
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.titleBackground}>
                    <Text style={styles.title}>Zen Gov</Text>
                </View>                
                <Image source={require('../assets/images/logo.png')}/>
                <Text style={styles.subtitle}>Entrar Anônimo</Text>                
                <Text style={styles.subtitle}>Ou</Text>
                <Text style={styles.subtitle}>Login com o Facebook</Text>
                <Text style={styles.subtitle}>Login com o Google</Text>

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
        marginTop: -200,
        
    },  
    title:{
        color:'#fff',
        fontFamily: 'Permanent Marker Regular',
        fontSize: 50,
    },
    subtitle:{
        color:'#fff',
        fontSize: 30,
        backgroundColor: '#00838F',
    }
})

