import React from "react";

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';


import RecipeBigImg from "../components/RecipeBigImg";

import IngredientList from "../components/IngredientList";
import kitchenRecipes from "../data/kitchenRecipes.json";

export const RecipeDetailScreen: React.FC = () => {

    const screenWidth:number = Dimensions.get('window').width;
    const screenHeight:number = Dimensions.get('window').height;

    return(
        <SafeAreaView>
                    <View  style={styles.column}>
                        <RecipeBigImg imageURL={kitchenRecipes[0].imageURL} title={kitchenRecipes[0].name} type={kitchenRecipes[0].type}/>
                        <View style={[{height: screenHeight}, {padding: 50}, {width: screenWidth}, {marginTop: screenHeight*0.37}]}>
                            <View style={styles.headlineColumn}>
                                <Text style={styles.headline}>Ingredients</Text>
                                <Text style={styles.servings}>For: 3 servings</Text>
                            </View>
                            <IngredientList data={kitchenRecipes[0].ingredients}/>
                        </View>     
                    </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    column: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    headlineColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    headline: {
        fontSize: 26,
        color: '#444654',
        fontWeight: 'bold'
    },
    servings: {
        fontSize: 16,
        color: '#444654'
    },
});
