import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {RecipeDetailScreen} from '../Screens/RecipeDetailScreen';
import {Recipe} from '../interfaces/recipesBD';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Recipe;
  Undefined: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={RecipeDetailScreen}
        options={{title: 'Recipe Details', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
