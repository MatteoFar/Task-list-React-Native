import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function RecipeTile({ item, navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("RecipesDetails", {
          id: item.id,
        });
      }}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.subContaier}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderWidth: 1,
  },
  image: {
    width: "30%",
    height: 70,
  },
  subContaier: {
    width: "70%",
    padding: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
