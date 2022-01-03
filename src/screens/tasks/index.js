import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Header from "../../components/header";
import TaskForm from "./TaskForm";
import TaskTile from "./TaskTile";
import FloatingBtn from "../../components/header/FloatingBtn";
import CountingTask from "../../components/header/CountingTask";

import { useSelector } from "react-redux";
import { toggleTask, deleteTask } from "../../redux/action";
import { getTask } from "../../redux/selectors";
import { useDispatch } from "react-redux";

export default function TasksScreen() {
  // Liste de taches
  // State pour garder en mémoire les taches
  const [isFormVisible, setisFormVisible] = useState(false);

  const tasks = useSelector(getTask); // pour avoir accès au store
  const dispatch = useDispatch(toggleTask, deleteTask); // initialisation de dispatch pour avoir accés aux actions

  // item = { title: "Hello World", isCompleted: false, }
  const renderItem = ({ item }) => {
    return (
      <TaskTile
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
        task={item}
      />
    );
  };
  // Ajouter une fonction pour ajouter une tâche au state
  // passer cette fonction à notre formulaire

  const _toggleForm = () => {
    setisFormVisible(!isFormVisible);
  };

  const onUpdateTask = (id) => {
    dispatch(toggleTask(id)); // utilisation de dispatch pour l'action toggleTask
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id)); // utilisation de dispatch pour l'action onDeleteTask
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
            {isFormVisible && <TaskForm />}
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
