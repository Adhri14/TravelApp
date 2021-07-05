import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';

const Category = ({label1, label2, active}) => {
  const [isActive, setIsActive] = useState(true);

  const select = () => {
    setIsActive(!isActive);
  };

  if (active) {
    return (
      <TouchableOpacity style={styles.button} onPress={select}>
        <Text style={styles.text(isActive)}>{label1}</Text>
        <View style={styles.line(isActive)} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.button} onPress={select}>
      <Text style={styles.text2}>{label2}</Text>
      {/* <View style={styles.line(isActive)} /> */}
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 39,
  },
  text: isActive => ({
    fontSize: 14,
    fontFamily: fonts.medium,
    color: isActive ? colors.yellow : colors.white,
    opacity: isActive ? 1 : 0.5,
  }),
  line: isActive => ({
    width: '100%',
    height: 2,
    backgroundColor: isActive ? colors.yellow : colors.white,
    marginTop: 3,
  }),
  text2: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: colors.white,
    opacity: 0.5,
  },
});
