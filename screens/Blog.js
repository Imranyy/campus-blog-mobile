import React from 'react';
import { StyleSheet, ScrollView,Text,View } from 'react-native';
function Blog({route,navigation}) {
    const {itemId,body}=route.params;
    return (
        <ScrollView>
            <View>
                <Text>Detail</Text>
                <Text> {body}</Text>
            </View>
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    
})
export default Blog;