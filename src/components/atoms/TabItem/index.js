import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  HomePrimary,
  HomeSecondary,
  MenuPrimary,
  MenuSecondary,
  NotifPrimary,
  NotifSecondary,
  SettingPrimary,
  SettingSecondary,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({active, title, onPress, onLongPress}) => {
  const Icon = () => {
    switch (title) {
      case 'Home':
        return active ? <HomePrimary /> : <HomeSecondary />;
      case 'Notif':
        return active ? <NotifPrimary /> : <NotifSecondary />;
      case 'Menu':
        return active ? <MenuPrimary /> : <MenuSecondary />;
      case 'Setting':
        return active ? <SettingPrimary /> : <SettingSecondary />;
      default:
        return <HomePrimary />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      {active && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: colors.yellow,
    marginTop: 5,
  },
});
