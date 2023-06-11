import React from "react";

import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

interface RecipeBigImgProps {
    imageURL: string;
    title: string;
    type: string;
}

const RecipeBigImg: React.FC<RecipeBigImgProps> = ({imageURL, title, type}) => {

    const screenWidth:number = Dimensions.get("window").width;
    const screenHeight:number = Dimensions.get("window").height;

    return(
            <View style={styles.column}>
                {/* TODO: Add top buttons */}
                <Image 
                    style={[styles.image, {width: screenWidth}, {height: screenHeight*0.4}]} 
                    source={{uri: imageURL}}
                    // source={{uri: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg'}}
                    resizeMode="cover"                    
                />
                <View style={[styles.columnFood, {marginTop: screenHeight*0.3}]}>
                    <Text style={styles.type}>{type.toUpperCase()}</Text>
                    <Text style={styles.headline}>{title}</Text>
                </View>      
            </View>
    );
}

export default RecipeBigImg;

const styles = StyleSheet.create({
    image: {
        opacity: 0.5
    },
    column: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#444654'
    },
    columnFood: {
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingHorizontal: 50
    },
    headline: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26
    },
    type: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});