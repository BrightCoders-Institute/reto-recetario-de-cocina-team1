import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { RecipeDetailScreen } from '../Screens/RecipeDetailScreen';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: undefined,
}

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}
