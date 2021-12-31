import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function TaskTile({ task, onUpdateTask, onDeleteTask }) {
  const onChangeStatus = () => {
    onUpdateTask(task.id);
  };

  const _onDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onChangeStatus} style={styles.subContainer}>
        <Image
          style={styles.check}
          source={
            task.isCompleted
              ? require("../../../assets/icon_check_circle.png")
              : require("../../../assets/icon_circle.png")
          }
        />
        <Text style={styles.title}>{task.title}</Text>
      </Pressable>
      <Pressable onPress={_onDeleteTask}>
        <Image
          style={styles.check}
          source={require("../../../assets/icon_delete.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginLeft: 20,
    fontSize: 16,
  },
  check: {
    height: 26,
    width: 26,
  },
});
