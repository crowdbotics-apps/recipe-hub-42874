import React, { useState } from "react";
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const RecipeDetailScreen = ({route}) => {


  const [isFavorite, setIsFavorite] = useState(false);


  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const ingredients = route?.params?.data?.ingredients?.split(" ")

  return <SafeAreaView style={styles.container}>
      <Image source={{
      uri: "https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg"
    }} style={styles.image} />
      <Text style={styles.name}>{route?.params?.data?.title}</Text>
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {ingredients.map((ingredient, index) => <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>)}
      <Text style={styles.sectionTitle}>Time Consume:</Text>
      <Text style={styles.instructions}>{route?.params?.data?.time_consume}</Text>
      <Text style={styles.sectionTitle}>Steps:</Text>
    
      <Text>{route?.params?.data?.steps}</Text>
      <TouchableOpacity style={[styles.favoriteButton, isFavorite ? styles.favoriteButtonActive : null]} onPress={handleFavoritePress}>
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:20
  },
  favoriteButtonActive: {
    backgroundColor: "#ff0000"
  },
  favoriteButtonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
export default RecipeDetailScreen;