import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function index({ toggle, isOpen }) {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
      <Text style={styles.txt}>{isOpen ? "x" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "orange",
    borderRadius: 40,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
