import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page Menu</Text>
    </View>
  );
};

export default Menu;

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
