import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

interface CardProps {

  image: string;
  nameFood: string;
}

const Card: React.FC<CardProps> = ({image,nameFood}) => {
  return (
<TouchableHighlight underlayColor='lightgray' onPress={()=>{}}>
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:image}}
          style={styles.image}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameFood}>
          {nameFood}
        </Text>
      </View>
    </View>
</TouchableHighlight>
  );
};

export default Card;
