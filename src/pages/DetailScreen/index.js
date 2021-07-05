import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Back, Cloud, DetailPic, Plane, Star} from '../../assets';
import {InfoCard} from '../../components';
import {colors, fonts} from '../../utils';

const DetailScreen = ({navigation}) => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="ligth-content"
            translucent={true}
          />
          <View style={styles.body}>
            <ImageBackground style={styles.imgBackground} source={DetailPic}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Bali, Indonesian</Text>
            <View style={styles.info}>
              <InfoCard label="4,9" image={<Star />} />
              <InfoCard label="27C" image={<Cloud />} />
              <InfoCard label="9 Jan" image={<Plane />} />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.titleDesc}>Descriptions</Text>
            <Text style={styles.subtitleDesc}>
              Bali is famous for beaches, countless waves for surfing scuba
              diving, natiral sites to visit and explore tremely fascinating
              Hindus culture with colorfuls ceremonies and magnificent temples
              gifted artists the producing.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.wrapper}>
          <Text style={styles.discount}>Stating From</Text>
          <Text style={styles.price}>$500 - 750</Text>
        </View>
        <TouchableOpacity style={styles.but}>
          <Text style={styles.textButton}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black2,
  },
  imgBackground: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 10,
  },
  container: {
    paddingTop: 69,
    paddingHorizontal: 30,
    backgroundColor: colors.black,
    marginTop: -49,
    zIndex: -1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.yellow,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  titleDesc: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  subtitleDesc: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.white,
    opacity: 0.7,
    marginTop: 5,
    lineHeight: 23,
  },
  footer: {
    backgroundColor: colors.black,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discount: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.semiBold,
    color: colors.yellow,
  },
  but: {
    backgroundColor: colors.yellow,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 53,
    color: colors.white,
    fontFamily: fonts.semiBold,
  },
});
