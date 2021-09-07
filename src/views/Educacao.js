import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Saude = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Educação</Text>
            <Text style={styles.text}>Coloque coisas aqui!!!</Text>
        </View>
    )
}

export default Saude

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    text:{
        color:'#000',
        fontWeight:'700',
        fontSize:30
    },
})