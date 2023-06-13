import { useNavigation } from '@react-navigation/native'
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { Title } from '../components/Title';
import { Carousel } from '../components/Carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

 return (
   <View style= {styles.container}>
      <View style= {styles.searchContainer}>
        <View style={styles.search}/>
      </View>
        <View style = {styles.trendingSection}>
          <Title title='TRENDING'/>
          <Carousel type='trending'></Carousel>
        </View>
      <View>
          <View style = {styles.recentSection}>
              <Title title='RECENT'/>
              <Carousel type='recent'></Carousel>
          </View>
      </View>
      <Button title='Ir a Detalle' onPress={() => navigation.navigate('DetailScreen')}/>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  searchContainer: {
      height: wp('18%'),
      borderWidth: 4,
      borderColor: '#00B050',
      padding: wp('3%'),
      marginBottom: wp('3%')
  },
  search: {
    flex: 1,
    backgroundColor: '#343435', 
    borderRadius: 10,
  },
  trendingSection: {
    height: wp('52%'),
    marginBottom: wp('5%')
  },
  recentSection: {
    height: wp('90%')
  }
});
