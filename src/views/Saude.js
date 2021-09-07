import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Saude = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Saúde</Text>
            <Text style={styles.text}>Em construção.</Text>
            <Text style={styles.text}>Coloque coisas aqui!!!</Text>
            <Text style={styles.text}>Usar ListItem.Accordion</Text>

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
        backgroundColor:'#2E2D33',
    },
    text:{
        color:'#fff',
        fontWeight:'700',
        fontSize:30
    },
})