import React from 'react';

import {View, FlatList, Text, StyleSheet, useColorScheme} from 'react-native';

import Ingredient from '../interfaces/Ingredient';

interface IngredientListProps {
  data: Ingredient[];
}

const isDarkMode = useColorScheme() === 'dark';

const IngredientList: React.FC<IngredientListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.column}>
          <View style={styles.itemContainer}>
            <Text style={isDarkMode ? {color: 'white'} : {color: '#444654'}}>
              {item.name}
            </Text>
            <Text style={isDarkMode ? {color: 'white'} : {color: '#444654'}}>
              {item.quantity}
            </Text>
          </View>
          <View style={styles.separator} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 18,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    marginTop: 5,
    backgroundColor: '#707070',
  },
});

export default IngredientList;
