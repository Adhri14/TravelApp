import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Star2, Location} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardRate = ({primary, label, image, events, location, onPress}) => {
  if (primary) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.wrapperStar}>
              <Star2 />
            </View>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.footer}>
            <Text style={styles.text}>{label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else if (events) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View style={styles.containerEvents}>
          <Image source={image} style={styles.imageEvents} />
          <View style={styles.wrapperEvents}>
            <Text style={styles.textEvents}>{label}</Text>
            <View style={styles.location}>
              <Location />
              <Text style={styles.nameLocation}>{location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardRate;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  wrapper: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  footer: {
    backgroundColor: colors.yellow,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  wrapperStar: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    right: 0,
    width: 64,
    height: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: colors.yellow,
  },
  containerEvents: {
    width: 230,
    height: 205,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
  },
  imageEvents: {
    width: 230,
    height: 205,
    resizeMode: 'cover',
  },
  wrapperEvents: {
    position: 'absolute',
    width: 137,
    top: 20,
    left: 20,
  },
  textEvents: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  nameLocation: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.white,
    marginLeft: 5,
  },
});
