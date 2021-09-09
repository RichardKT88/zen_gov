import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Perfil</Text>
            <Text style={styles.text}>Em construção!!!</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2E2D33',
    },
    text:{
        color:'#fff',
        fontWeight:'700',
        fontSize:30
    },
})