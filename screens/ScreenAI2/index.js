import { recipeconnector_get_api_v1_userrecipe_list } from "../../store/recipeconnector/recipeconnector_response_get_Listrecipes.slice.js";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet } from 'react-native';

const RecipeScreen = () => {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
    dispatch(recipeconnector_get_api_v1_userrecipe_list());
  }, []);

  const fetchRecipes = () => {
    // Fetch recipes from API or database
    const dummyRecipes = [{
      id: 1,
      title: 'Recipe 1',
      image: 'https://tinyurl.com/42evm3m3'
    }, {
      id: 2,
      title: 'Recipe 2',
      image: 'https://tinyurl.com/42evm3m3'
    }, {
      id: 3,
      title: 'Recipe 3',
      image: 'https://tinyurl.com/42evm3m3'
    }, {
      id: 4,
      title: 'Recipe 4',
      image: 'https://tinyurl.com/42evm3m3'
    }, {
      id: 5,
      title: 'Recipe 5',
      image: 'https://tinyurl.com/42evm3m3'
    }];
    setRecipes(dummyRecipes);
  };

  const renderRecipeItem = ({
    item
  }) => <View style={styles.recipeItem}>
      <Image source={{
      uri: item.image
    }} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={recipes} renderItem={renderRecipeItem} keyExtractor={item => item.id.toString()} />
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
    borderBottomColor: '#ccc'
  },
  recipeImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default RecipeScreen;