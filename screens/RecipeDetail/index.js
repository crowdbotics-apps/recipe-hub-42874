import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecipeDetailScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const recipe = {
    name: 'Delicious Pasta',
    image: 'https://tinyurl.com/42evm3m3',
    ingredients: ['Pasta', 'Tomatoes', 'Garlic', 'Olive Oil', 'Basil'],
    time_consume: '1. Cook pasta according to package instructions. \n2. In a pan, heat olive oil and sauté garlic until fragrant. \n3. Add tomatoes and cook until softened. \n4. Toss cooked pasta with the tomato sauce. \n5. Garnish with basil leaves and serve hot.'
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: recipe.image
    }} style={styles.image} />
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, index) => <Text key={index} style={styles.ingredient}>{ingredient}</Text>)}
      <Text style={styles.sectionTitle}>Time Consume:</Text>
      <Text style={styles.instructions}>{recipe.time_consume}</Text>
      <TouchableOpacity style={[styles.favoriteButton, isFavorite ? styles.favoriteButtonActive : null]} onPress={handleFavoritePress}>
        <Text style={styles.favoriteButtonText}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20
  },
  favoriteButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  favoriteButtonActive: {
    backgroundColor: '#ff0000'
  },
  favoriteButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default RecipeDetailScreen;