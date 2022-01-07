import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RecipesDetails } from "../screens/RecipesDetails";
import RecipesList from "../screens/RecipesList";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const RecpiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"RecipesList"} component={RecipesList} />
      <Stack.Screen name={"RecipesDetails"} component={RecipesDetails} />
    </Stack.Navigator>
  );
};
