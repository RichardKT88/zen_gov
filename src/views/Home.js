import React from 'react'
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Card } from 'react-native-elements'


const cardList = [
        {Id:'1', cardTitle:'Saúde', cardName:'Saude', cardImage: require('../assets/images/saude.png')},
        {Id:'2', cardTitle:'Educação', cardName:'Educacao', cardImage: require('../assets/images/educacao.png')},
        {Id:'3', cardTitle:'Segurança', cardName:'Seguranca', cardImage: require('../assets/images/seguranca.png')},
        {Id:'4', cardTitle:'Trabalho', cardName:'Trabalho', cardImage: require('../assets/images/trabalho.png')},
        {Id:'5', cardTitle:'Obras', cardName:'Obras', cardImage: require('../assets/images/obras.png')},
        {Id:'6', cardTitle:'Transporte', cardName:'Transporte', cardImage: require('../assets/images/transporte.png')},
        {Id:'7', cardTitle:'Educação', cardName:'Educacao', cardImage: require('../assets/images/educacao.png')},
        {Id:'8', cardTitle:'Educação', cardName:'Educacao', cardImage: require('../assets/images/educacao.png')},
        {Id:'9', cardTitle:'Educação', cardName:'Educacao', cardImage: require('../assets/images/educacao.png')},
        {Id:'10', cardTitle:'Educação', cardName:'Educacao', cardImage: require('../assets/images/educacao.png')},
       
];


const HomeScreen = ({navigation}) => (        
        <View style={styles.container}>
            <FlatList 
                data={cardList}
                numColumns={2}
                columnWrapperStyle={{justifyContent:'center'}}
                renderItem={({item}) => 
                    <TouchableWithoutFeedback onPress={() => navigation.navigate(item.cardName) }>
                        <Card containerStyle={{marginTop: 25, width: 151, height:125, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                            <Card.Title style={{ color: '#fff'}}>{item.cardTitle}</Card.Title>
                            <Card.Image source={item.cardImage} style={{ width: 66, height: 66, position:'relative', alignSelf:'center'}}/>
                        </Card>
                    </TouchableWithoutFeedback>
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