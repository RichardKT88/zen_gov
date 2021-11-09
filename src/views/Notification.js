import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Card } from 'react-native-elements';

import { noteList } from '../constants/NotificationList';

const NotificationScreen = () => {
    return(
    <View style={styles.container}>
        <FlatList 
            data={noteList}
            renderItem={({item}) => 
                <Card containerStyle={{marginTop: 25, width: '90%', height: 190, backgroundColor: '#00838F', borderRadius:25, borderColor:'#00838F'}}>
                    <Card.Title style={{ color: '#fff', textAlign:'left'}}>{item.title}</Card.Title>
                    <Text style={{color: '#fff', textAlign:'justify'}}>
                        {item.message}
                    </Text>
                    <Card.Divider/>
                    <Text style={{color: '#fff', textAlign:'right'}}>{item.date}</Text>
                </Card>
            }
            keyExtractor={item=>item.Id}    
        />        
    </View>
  )    
}

export default NotificationScreen

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