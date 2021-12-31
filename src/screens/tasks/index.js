import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Header from "../../components/header";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";
import FloatingBtn from "../../components/header/FloatingBtn";
import CountingTask from "../../components/header/CountingTask";

export default function TasksScreen() {
  // Liste de taches
  // State pour garder en mémoire les taches
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setisFormVisible] = useState(false);

  // item = { title: "Hello World", isCompleted: false, }
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        task={item}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
      />
    );
  };
  // Ajouter une fonction pour ajouter une tâche au state
  // passer cette fonction à notre formulaire
  const onAddTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        isCompleted: false,
      },
    ]);
  };

  const onUpdateTask = (id) => {
    let newTasks = [];
    tasks.forEach((t) => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
      newTasks.push({
        id,
        title: t.title,
        isCompleted: !t.isCompleted,
      });
    });
    setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    let newTasks = [];
    tasks.forEach((t) => {
      if (t.id !== id) {
        newTasks.push(t);
        return;
      }
    });
    setTasks(newTasks);
  };

  const _toggleForm = () => {
    setisFormVisible(!isFormVisible);
  };

  // 2xTaksCounter => props nb & title
  // TaskList => return FlatList => TaskTile

  // Ajouter un button flottant => style absolute
  // callback => rendu cond. Taskform
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            {isFormVisible && <TaskForm onAddTask={onAddTask} />}
            <View style={styles.containerCounters}>
              <CountingTask nb={tasks.length} title={"Tâche crées"} />
              <CountingTask
                nb={tasks.filter((t) => t.isCompleted === true).length}
                title={"Tâche éffectuées"}
              />
            </View>
          </>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
    </>
  );
}

const styles = StyleSheet.create({
  containerCounters: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
