import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default props => (
    <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:  '#2E2D33',        
    }}>
        <Text style={{
            fontSize: 50,
            color: '#FFF'
        }}>
            Home 
        </Text>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Saúde</Card.Title>
            <Card.Image source={require('../assets/saude.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Educação</Card.Title>
            <Card.Image source={require('../assets/educacao.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Segurança</Card.Title>
            <Card.Image source={require('../assets/seguranca.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Trabalho</Card.Title>
            <Card.Image source={require('../assets/trabalho.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Obras</Card.Title>
            <Card.Image source={require('../assets/obras.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
        <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
            <Card.Title>Transporte</Card.Title>
            <Card.Image source={require('../assets/transporte.png')} style={{ width: 66, height: 66 }} />                    
        </Card>
    </View>
)

