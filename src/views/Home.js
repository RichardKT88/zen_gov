import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default props => (   
      
        <ScrollView style={{
            flex: 1,
            //justifyContent:'center',
            //alignItems: 'center',
            backgroundColor:  '#2E2D33',
            flexDirection:'row',
            flexWrap: 'wrap',}} 
        >
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Saúde</Card.Title>
                <Card.Image source={require('../assets/images/saude.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Educação</Card.Title>
                <Card.Image source={require('../assets/images/educacao.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Segurança</Card.Title>
                <Card.Image source={require('../assets/images/seguranca.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Trabalho</Card.Title>
                <Card.Image source={require('../assets/images/trabalho.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Obras</Card.Title>
                <Card.Image source={require('../assets/images/obras.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
            <Card containerStyle={{width: 151, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66 }} />                    
            </Card>
        </ScrollView>    
)

