import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const PaymentScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Assinatura</Text>
            <Text style={styles.text}>Em construção.</Text>
            <Text style={styles.text}>Coloque coisas aqui!!!</Text>

        </View>
    )
}

export default PaymentScreen

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