import React,{useEffect,useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground,Text,FlatList,Alert } from 'react-native';

function Blogs({navigation}) {
    const pressHandler=(item)=>{
        navigation.navigate('Blog',{
          itemId:item.id,
          body:item.body
        })
      }
      const [blogs, setBlogs]=useState([]);
      const getBlogs=async()=>{
        try {
          const url='https://campus-blog.onrender.com/api/blogs';
          const response=await fetch(url)
          const parseRes=await response.json()
          setBlogs(parseRes)
        } catch (error) {
          Alert.alert(error.message)
        }
      }
      useEffect(()=>{
        getBlogs()
      },[])
    return (
    <View style={styles.container}>
        <FlatList
          style={styles.blogContainer}
          data={blogs}
          keyExtractor={(item)=>item._id}
          renderItem={({item})=>(
          <TouchableOpacity style={styles.blogItem} onPress={()=>pressHandler(item)}>
            <ImageBackground source={{uri:item.image}} style={styles.image} imageStyle={{ borderRadius: 10}}>
             <View style={styles.backgoundText}>
              <Text style={styles.text}>{item.title}</Text>
             </View>
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
    backgoundText:{
      backgroundColor:"rgba(0, 0, 0, 0.3)",
      position: 'absolute',
      bottom: 0,
      top:0,
      left:0,
      right:0,
      borderRadius: 10
    },
    text:{
      color:'white',
      fontSize:18,
      marginLeft:10,
      position: 'absolute',
      fontFamily:'roboto-condensed-bold',
      bottom: 10,
    }
  });
export default Blogs;