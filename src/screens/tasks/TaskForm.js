import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

export default function TaskForm({ onAddTask }) {
  const [newTitle, setNewTitle] = useState("");

  const onChangeText = (val) => {
    setNewTitle(val);
  };

  const onAddNewTask = () => {
    if (newTitle === "") return;
    onAddTask(newTitle);
    setNewTitle("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />
      <Button title="Ajouter" onPress={onAddNewTask} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 5,
    width: "70%",
    height: 40,
  },
});
