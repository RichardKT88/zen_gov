import React from 'react'
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Card } from 'react-native-elements'

import { cardList } from '../constants/CardList'

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

