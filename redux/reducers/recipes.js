import { ADD_RECIPES, GET_RECIPES_BY_ID } from "../action/actionType";

const initalState = {
  list: [],
  selectedRecipe: {},
};

export const recipes = (state = initalState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        list: [...state.list, ...action.payload.data],
        selectedRecipe: state.selectedRecipe,
      };
    case GET_RECIPES_BY_ID:
      return {
        list: state.list,
        selectedRecipe: action.payload.data,
      };
    default:
      return state;
  }
};
