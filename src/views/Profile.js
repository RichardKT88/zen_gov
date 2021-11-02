import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements' 

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <Avatar
                size={256}
                rounded
                source={require('../assets/images/profile.png')}
                />
            <Text style={styles.nickname}>Nome</Text>
            <Text style={styles.nickname}>Email@email.com</Text>
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
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: 'white',
        marginVertical: 10,
        fontSize: 30,
        fontWeight: 'bold'
    }
})
