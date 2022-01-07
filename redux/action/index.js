import {
  ADD_RECIPES,
  GET_RECIPES_BY_ID,
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
} from "./actionType";

export const addRecipes = (data) => ({
  type: ADD_RECIPES,
  payload: {
    data,
  },
});

export const getRecipes = (data) => ({
  type: GET_RECIPES_BY_ID,
  payload: {
    data,
  },
});

// Actions : fonctions qui renvoient un object qui sera traité aux réducers - {type: MON_ACTION, payload: {data}}

// ADD_TASK

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
}

// TOGGLE_TASK
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

// DELETE_TASK

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});
