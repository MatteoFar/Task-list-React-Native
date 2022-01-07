import { store } from "./store";

export const getRecipesList = (store) => store.recipes.list;
export const getSelectedRecipesList = (store) => store.recipes.selectedRecipe;

// Selectors : selectionner une partie de notre store

export const getTask = (store) => store.tasksList;
// export const getCompletedTasks = (store) =>
//   store.tasksList.filter((task) => task.completed);
