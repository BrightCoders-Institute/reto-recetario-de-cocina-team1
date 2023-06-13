import React from 'react'
import {View, Text, StyleSheet, Image, TouchableHighlight, useColorScheme} from 'react-native'
import { Recipe } from '../../interfaces/recipesBD';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
    recipe: Recipe,
    type?: 'trending' | 'recent'
}

export const Card = ({recipe, type} : Props) => {
    const uri = recipe.imageURL;
    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'dark' ? 'white' : 'black';
    return (
    <>
        <View style = {[styles.imageContainer, type === 'trending' ? styles.trending : styles.recent]}>
          <TouchableHighlight style={styles.touchable} onPress={() => {}}>
            <Image source = {{ uri }} style = {[styles.image, type === 'trending' ? styles.trending : styles.imageRecent]}/>
          </TouchableHighlight>
        </View>
        <View style = {[styles.textContainer]}>
          <Text style = {[{color: textColor}, type === 'trending' ? styles.title : styles.recentTitle] }>{recipe.name}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 2,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
        marginBottom: wp('12%'),
    },
    trending: {

    },
    recent: {
      width: wp('45%'),
      marginBottom: wp('42%'),
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 5,
    },
    imageRecent: {
      aspectRatio: 3/4,
    }, 
    textContainer: {
      flex: 1,
      width: '100%',
    },
    title: {
        fontSize: 12,
        fontWeight: '400'
    },
    recentTitle: {
      fontSize: 15,
      fontWeight: '600'
    },
    touchable: {
      borderRadius: 5
    }
})