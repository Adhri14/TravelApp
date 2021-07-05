import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Bali, Brazil, England, Jepang, Paris} from '../../assets';
import {HeaderHome, Category, CardRate} from '../../components';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <StatusBar backgroundColor={colors.black2} barStyle="light-content" />
        <View style={styles.header}>
          <HeaderHome />
        </View>
        <Text style={styles.title}>Let’s enjoy your {'\n'}Vacation</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <Category label1="All" active />
              <Category label2="Asia" />
              <Category label2="America" />
              <Category label2="Africa" />
              <Category label2="Europe" />
              <Category label2="North" />
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.titleList}>
            <Text style={styles.titleContent}>Poppular Countries</Text>
            <Text style={styles.subtitleContent}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                label="Bali"
                image={Bali}
                primary
              />
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                label="Paris"
                image={Paris}
              />
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                label="Jepang"
                image={Jepang}
              />
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                label="England"
                image={England}
              />
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                label="Brazil"
                image={Brazil}
              />
            </View>
          </ScrollView>
        </View>
        <View>
          <View style={styles.titleList}>
            <Text style={styles.titleContent}>Ongoing Events</Text>
            <Text style={styles.subtitleContent}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                location="Brazil"
                label="Rio Carnival, Rio
                de Janiro"
                events
                image={Jepang}
              />
              <CardRate
                onPress={() => navigation.navigate('DetailScreen')}
                location="Jepang"
                label="Sapporo Snow
                Festival"
                events
                image={Brazil}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black,
    paddingVertical: 30,
  },
  header: {marginHorizontal: 30},
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.white,
    marginVertical: 25,
    marginLeft: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36,
    marginLeft: 30,
    marginRight: 10,
  },
  titleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 30,
  },
  titleContent: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
    color: colors.white,
  },
  subtitleContent: {
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: colors.white,
    opacity: 0.5,
  },
});
