import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TasksScreen from "./src/screens/tasks";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TasksScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
