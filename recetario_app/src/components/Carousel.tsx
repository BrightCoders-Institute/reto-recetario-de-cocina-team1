import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import data from '../data/kitchenRecipes.json';
import { Card } from './Card';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface CarouselProps {
  type: 'trending' | 'recent',
  navigation: StackNavigationProp<RootStackParams>
}

export function Carousel({type = 'trending', navigation} : CarouselProps) {

  const renderRecipeCard = ({ item }: { item: any }) => (
    <>
      <View style = { [styles.recipeCardContainer, type === 'trending' ? styles.trending : styles.recent ] }>
        <Card recipe = { item } type = {type} navigation = {navigation}/>
      </View>
    </>
  );

  return (
    <>
        <FlatList
          data = {data}
          renderItem = {renderRecipeCard}
          keyExtractor = {(item: any) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
    </>
  );
}

const styles = StyleSheet.create({
  recipeCardContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5, 
    paddingHorizontal: 10,
  },
  trending: {
    width: wp('34%'),
    height: wp('40%'),
  },
  recent: {
    paddingTop: 10,
    height: wp('75%'),
    width: wp('50%')
  }
});
