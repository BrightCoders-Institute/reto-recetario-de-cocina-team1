import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  title: string;
}

export const Title = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: wp('3%'),
  },
  title: {
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: '500',
    color: '#C91C6D',
    marginLeft: wp('2%'),
  },
});
