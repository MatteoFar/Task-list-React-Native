import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TasksScreen from "../screens/tasks";
import { RecpiesStack } from "./RecipesStack";

const Tabs = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Recettes" component={RecpiesStack} />
        <Tabs.Screen name="Liste" component={TasksScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
