import React,{useEffect,useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground,Text,FlatList } from 'react-native';
import img from '../assets/anime.png';
import img1 from '../assets/iron.png';
import img2 from '../assets/scorpion.jpg';

function Blogs({navigation}) {
    const pressHandler=()=>{
        navigation.navigate('Blog')
      }
      const [blogs, setBlogs]=useState([
        {
          id:1,
          img:img,
          title:"How to get rich early?",
          body:'Get money early, kill some dudes.',
          date:'1/2/2023'
        },
        {
          id:2,
          img:img1,
          title:"How to get rich early?",
          body:'Get money early, kill some dudes.',
          date:'1/2/2023'
        },
        {
          id:3,
          img:img2,
          title:"How to get rich early?",
          body:'Get money early, kill some dudes.',
          date:'1/2/2023'
        }
      ]);
      // const getBlogs=async()=>{
  //   try {
  //     const url=''
  //     const response=await fetch(url)
  //     const parseRes=await response.json()
  //     // setBlogs(parseRes)
  //   } catch (error) {
  //     Alert.alert('No internet')
  //   }
  // }
  // useEffect(()=>{
  //   getBlogs()
  // },[])
    return (
    <View style={styles.container}>
        <FlatList
          style={styles.blogContainer}
          data={blogs}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
          <TouchableOpacity style={styles.blogItem} onPress={pressHandler}>
            <ImageBackground source={item.img} style={styles.image} imageStyle={{ borderRadius: 10}}>
              <Text style={styles.text}>{item.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
          )}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    blogContainer:{
      paddingHorizontal:1,
    },
    image:{
      height:150,
    },
    blogItem:{
      marginBottom:8,
      paddingHorizontal:10,
      paddingVertical:8,
    },
    text:{
      color:'white',
      fontSize:18,
      fontWeight:"bold",
      marginLeft:10,
      position: 'absolute',
      bottom: 10,
    }
  });
export default Blogs;