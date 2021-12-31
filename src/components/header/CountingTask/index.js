import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Counter({ nb, title }) {
  return (
    <View>
      <Text style={style.nb}>{nb}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  nb: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
