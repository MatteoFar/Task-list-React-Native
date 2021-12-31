import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TasksScreen from "./src/screens/tasks";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TasksScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
