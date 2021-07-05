import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Profile, Search} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={Profile} style={styles.profile} />
        <View style={styles.content}>
          <Text style={styles.title}>Hello, Adhri</Text>
          <Text style={styles.subtitle}>Good Morning</Text>
        </View>
      </View>
      <Search />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    resizeMode: 'cover',
    width: 60,
    height: 60,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.white,
    // marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.white,
    opacity: 0.6,
  },
});
