import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

import CloseButton from '../components/CloseButton';
import HeartButton from '../components/HeartButton';
import ShareButton from '../components/Share';

interface RecipeBigImgProps {
  imageURL: string;
  title: string;
  type: string;
  like: boolean;
}

const RecipeBigImg: React.FC<RecipeBigImgProps> = ({
  imageURL,
  title,
  type,
  like,
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const screenWidth: number = Dimensions.get('window').width;
  const screenHeight: number = Dimensions.get('window').height;

  const [isLiked, setIsLiked] = useState(like);
  const handleHeartPress = () => {
    setIsLiked(!isLiked);
  };
  const handleShare = () => {
    //
  };

  return (
    <View style={styles.column}>
      {/* TODO: Add top buttons */}
      {/* <Image
                    style={[styles.image, {width: screenWidth}, {height: screenHeight*0.4}]}
                    source={{uri: imageURL}}
                    // source={{uri: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg'}}
                    resizeMode="cover"
                /> */}

      <ImageBackground
        source={{uri: imageURL}}
        style={[{width: screenWidth}, {height: screenHeight * 0.4}]}>
        <View style={[styles.overlay, {height: screenHeight * 0.4}]}>
          <View style={styles.Icons}>
            <View style={styles.leftIcons}>
              <CloseButton onPress={() => navigation.navigate('HomeScreen')} />
              <ShareButton onPress={handleShare} />
            </View>
            <View style={styles.rightIcons}>
              <HeartButton onPress={handleHeartPress} filled={isLiked} />
            </View>
          </View>

          <View style={[styles.columnFood, {marginTop: screenHeight * 0.25}]}>
            <Text style={styles.type}>{type.toUpperCase()}</Text>
            <Text style={styles.headline}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecipeBigImg;

const styles = StyleSheet.create({
  Icons: {
    flexDirection: 'row',
    marginTop: 55,
  },
  leftIcons: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly',
  },
  rightIcons: {
    flexDirection: 'row',
    marginLeft: 30,
    width: '50%',
    justifyContent: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  column: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#444654',
  },
  columnFood: {
    position: 'absolute',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
  },
  headline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
  type: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
