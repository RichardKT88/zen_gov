import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Card } from 'react-native-elements'


const cardList = [
        {Id:'1', cardTitle:'Saúde', cardName:'Saude', cardImage:'https://cdn2.iconfinder.com/data/icons/public-services-filledoutline/64/HOSPITAL-health_clinic-urban-buildings-medical-256.png'},
        {Id:'2', cardTitle:'Educação', cardName:'Educacao', cardImage:'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-11-256.png'},
        {Id:'3', cardTitle:'Segurança', cardName:'Seguranca', cardImage:'https://cdn0.iconfinder.com/data/icons/city-elements-filledoutline-1/64/prison-jail-police_station-police-security-architecture_and_city-buildings-256.png'},
        {Id:'4', cardTitle:'Trabalho', cardName:'Trabalho', cardImage:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/builder_worker_helmet-256.png'},
        {Id:'5', cardTitle:'Obras', cardName:'Obras', cardImage:'https://cdn0.iconfinder.com/data/icons/ie_Constructions/128/7.png'},
        {Id:'6', cardTitle:'Transporte', cardName:'Transporte', cardImage:'https://cdn4.iconfinder.com/data/icons/STROKE/accounting/png/256/bus.png'},
        {Id:'7', cardTitle:'Educação', cardName:'Educacao', cardImage:'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-11-256.png'},
        {Id:'8', cardTitle:'Educação', cardName:'Educacao', cardImage:'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-11-256.png'},
        {Id:'9', cardTitle:'Educação', cardName:'Educacao', cardImage:'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-11-256.png'},
        {Id:'10', cardTitle:'Educação', cardName:'Educacao', cardImage:'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-11-256.png'},
       
];


const HomeScreen = ({navigation}) => (        
        <View style={styles.container}>
            <FlatList 
                data={cardList}
                numColumns={2}
                columnWrapperStyle={{justifyContent:'center'}}
                renderItem={({item}) => 
                    <TouchableOpacity  onPress={() => navigation.navigate(item.cardName) }>
                        <Card containerStyle={{marginTop: 25, width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                            <Card.Title style={{ color: '#fff'}}>{item.cardTitle}</Card.Title>
                            <Card.Image source={{uri:item.cardImage}} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>
                        </Card>
                    </TouchableOpacity>
                }
                keyExtractor={item=>item.Id}    
            />
        {/* <TouchableOpacity  onPress={() => navigation.navigate('Saude') }>
            <Card containerStyle={{marginTop: 50, width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Saúde</Card.Title>
                <Card.Image source={require('../assets/images/saude.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center', paddingTop: 0}}/>      
            </Card>
        </TouchableOpacity>           
        <TouchableOpacity  onPress={() => navigation.navigate('Educacao')}>
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
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Transporte")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Transporte")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Transporte")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => console.log("Clicou no Card Transporte")}>
            <Card containerStyle={{width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                <Card.Title style={{ color: '#fff'}}>Transporte</Card.Title>
                <Card.Image source={require('../assets/images/transporte.png')} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>      
            </Card>
        </TouchableOpacity> */}
        </View>    
)

export default HomeScreen

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