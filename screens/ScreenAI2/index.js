import { recipeconnector_get_api_v1_userrecipe_list } from "../../store/recipeconnector/recipeconnector_response_get_Listrecipes.slice.js";
import { useDispatch, useSelector } from "react-redux";
import React, {  useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {entities} = useSelector((state) => state.Recipeconnector_response_get_Listrecipes)


  useEffect(() => {
    dispatch(recipeconnector_get_api_v1_userrecipe_list());
  }, []);


  const renderRecipeItem = ({
    item
  }) => <TouchableOpacity onPress={() => navigation.navigate("ScreenAI3", {data : item})} style={styles.recipeItem}>
      <Image source={{
        uri:"https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg"
      }} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </TouchableOpacity >

  return <SafeAreaView style={styles.container}>

    <Text style={{fontSize:28, fontWeight:'500', color:'#000',marginLeft:20, marginTop:20, marginBottom:30 }}>
      Recipes
    </Text>
    <FlatList data={entities} renderItem={renderRecipeItem} keyExtractor={item => item.id.toString()} />
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal:20,
    marginVertical:10
  },
  recipeImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default RecipeScreen;