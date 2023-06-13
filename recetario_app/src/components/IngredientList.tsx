import React from "react";

import { 
    View, 
    FlatList, 
    Text, 
    StyleSheet 
} from 'react-native';

import Ingredient from '../interfaces/Ingredient';

interface IngredientListProps {
    data: Ingredient[];
}

const IngredientList: React.FC<IngredientListProps> = ({data}) => {

    return (
        <FlatList
            data={data}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.column}>
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.quantity}</Text>
                    </View>   
                    <View style={styles.separator}/>     
                </View>    
            )}
        />
    );
}

const styles = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: 'column'
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    text: {
        color: '#444654'
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