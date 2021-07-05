import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const InfoCard = ({image, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{image}</View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  content: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.semiBold,
  },
});
