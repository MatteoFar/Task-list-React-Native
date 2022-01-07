import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/action";

export default function Ingredient({ ing }) {
  const dispatch = useDispatch();
  const onAddIngredient = () => {
    dispatch(addTask(`Ingredient: ${ing.name}`));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{ing.name}</Text>
      <TouchableOpacity style={styles.btn} onPress={onAddIngredient}>
        <Text>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  name: {
    fontSize: 16,
  },
  btn: {
    borderColor: "grey",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
