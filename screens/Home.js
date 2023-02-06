import React, {useState} from 'react';
import {View, Text ,StyleSheet, Button} from "react-native"

function Home({navigation}) {
  const pressHandler=()=>{
    navigation.navigate('About')
  }
    return (
        <View style={styles.container}>
            <Button title='Go to About page' onPress={pressHandler}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    
  });

export default Home;