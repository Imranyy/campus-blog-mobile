import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Header() {
    return (
       <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
       </View>
    );
}
const styles=StyleSheet.create({
   header:{
    backgroundColor:'grey',
    paddingTop:30,
    paddingBottom:10,
   },
   title:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
   }
})

export default Header;