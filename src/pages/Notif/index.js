import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

const Notif = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page Notif</Text>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.semiBold,
    color: colors.yellow,
  },
});
