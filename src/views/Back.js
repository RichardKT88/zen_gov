import React from 'react'
import { View, Text } from 'react-native'

export default props => (
    <View style={{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:  '#2E2D33',
        flexDirection:'row',
        flexWrap: 'wrap',      
    }}>
        <Text style={{
            fontSize: 50,
            color: '#FFF'
        }}>
            Voltando... 
        </Text>
     
    </View>
)

