import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';

import RecipeBigImg from '../components/RecipeBigImg';
import IngredientList from '../components/IngredientList';
import {ScreenData} from '../interfaces/recipesBD';

interface Props {
  route: ScreenData;
}

export const RecipeDetailScreen = ({route}: Props) => {
  const recipe = route.params;
  const screenWidth: number = Dimensions.get('window').width;
  const screenHeight: number = Dimensions.get('window').height;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.column,
            isDarkMode
              ? {backgroundColor: 'black'}
              : {backgroundColor: 'white'},
          ]}>
          <StatusBar backgroundColor={'transparent'} translucent />
          <RecipeBigImg
            imageURL={recipe.imageURL}
            title={recipe.name}
            type={recipe.type}
            like={recipe.like}
          />
          <View
            style={[
              {height: screenHeight},
              {padding: 50},
              {width: screenWidth},
              {marginTop: screenHeight * 0.37},
            ]}>
            <View style={styles.headlineColumn}>
              <Text
                style={[
                  styles.headline,
                  isDarkMode ? {color: 'white'} : {color: '#444654'},
                ]}>
                Ingredients
              </Text>
              <Text
                style={[
                  styles.servings,
                  isDarkMode ? {color: 'white'} : {color: '#444654'},
                ]}>
                {recipe.servings}
              </Text>
            </View>
            <IngredientList data={recipe.ingredients} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  column: {
    alignItems: 'center',
  },
  headlineColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  servings: {
    fontSize: 16,
  },
});
