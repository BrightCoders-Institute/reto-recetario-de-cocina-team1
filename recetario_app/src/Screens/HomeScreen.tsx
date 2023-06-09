import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from '../components/Title';
import {Carousel} from '../components/Carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import SearchBar from '../components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const handleSearch = (text: string) => {
    console.log('Search query:', text);
    //
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselConteiners}>
        <SearchBar onSearch={handleSearch} />
        <View style={styles.trendingSection}>
          <Title title="TRENDING" />
          <Carousel type="trending" navigation={navigation}></Carousel>
        </View>
        <View>
          <View style={styles.recentSection} testID="recentCarrousel">
            <Title title="RECENT" />
            <Carousel type="recent" navigation={navigation}></Carousel>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    height: wp('18%'),
    borderWidth: 4,
    borderColor: '#00B050',
    padding: wp('3%'),
    marginBottom: wp('3%'),
  },
  search: {
    flex: 1,
    backgroundColor: '#343435',
    borderRadius: 10,
  },
  carouselConteiners: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  trendingSection: {
    height: wp('52%'),
    marginBottom: wp('5%'),
  },
  recentSection: {
    height: wp('90%'),
  },
});
