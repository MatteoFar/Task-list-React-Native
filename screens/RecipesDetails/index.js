import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useFetchRecipes } from "../../api/recipes/useFetchRecipes";
import { getSelectedRecipesList } from "../../redux/selectors";
import Ingredient from "./Ingredient";

export const RecipesDetails = ({ route }) => {
  const { getRecipesById } = useFetchRecipes();
  const { id } = route.params;

  const recipe = useSelector(getSelectedRecipesList);

  useEffect(() => {
    getRecipesById(id);
  }, []);

  if (!recipe) {
    return <View />;
  }

  return (
    <ScrollView>
      {/* <Image source={{ uri: recipe.image }} style={styles.image}></Image>  */}
      {/* APP Crashing on my device*/}
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.caption}>Ready in {recipe.readyInMinutes} min</Text>
      <Text style={styles.caption}>{recipe.summary}</Text>
      <View style={styles.containerIng}>
        <Text>Ingrédients: </Text>
        {recipe.extendedIngredients?.map((ing, index) => (
          <Ingredient key={index} ing={ing} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "200",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  caption: {
    textAlign: "center",
  },
  containerIng: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 6,
    borderTopColor: "grey",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
