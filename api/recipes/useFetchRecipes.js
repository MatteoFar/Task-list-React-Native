// const { getAllRecipes } = useFetchRecipes()
// const { getRecipesById } = useFetchRecipes()

import axios from "axios";
import { useDispatch } from "react-redux";
import { addRecipes, getRecipes } from "../../redux/action";

const URL_API_BY_ID = (id) =>
  `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`;

const URL_API = `https://api.spoonacular.com/recipes`;
const API_KEY = "05f551561c574625af9966b2bdd404a9";
const MAX_RESULT = 30;

// custom Hooks

export const useFetchRecipes = () => {
  const dispatch = useDispatch();

  const getAllRecipes = async (page) => {
    try {
      const response = await axios.get(`${URL_API}/complexSearch`, {
        params: {
          apiKey: API_KEY,
          number: MAX_RESULT,
          offset: page * MAX_RESULT,
        },
      }); // appel api sans promesse, avec async;
      dispatch(addRecipes(response.data.results));
      // console.log("DATA_LENGTH", response.data.results.length);
    } catch (error) {
      console.error("error in getAllRecipes", error);
    }
  };

  const getRecipesById = async (id) => {
    try {
      const response = await axios.get(URL_API_BY_ID(id), {
        params: {
          apiKey: API_KEY,
        },
      });
      dispatch(getRecipes(response.data));
    } catch (error) {
      console.error("error in getRecipesById", error);
    }
  };

  return {
    getAllRecipes,
    getRecipesById,
  };
};
