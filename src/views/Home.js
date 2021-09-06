import React from 'react'
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Saude from './Saude'


export default props => (   
      
        <View style={styles.container}>
        <TouchableOpacity  onPress={() => <Saude/> }>
            <Card containerStyle={{marginTop: 50, width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Saúde</Card.Title>
                <Card.Image source={require('../assets/images/saude.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center', paddingTop: 0}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Educação")}>
            <Card containerStyle={{marginTop: 50, width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Educação</Card.Title>
                <Card.Image source={require('../assets/images/educacao.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Segurança")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Segurança</Card.Title>
                <Card.Image source={require('../assets/images/seguranca.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Trabalho")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Trabalho</Card.Title>
                <Card.Image source={require('../assets/images/trabalho.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Obras")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Obras</Card.Title>
                <Card.Image source={require('../assets/images/obras.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Transporte")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>
        </View>    
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:  '#2E2D33',
        flexDirection:'row',
        flexWrap: 'wrap',
        
    },   
})