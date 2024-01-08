/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import React, {useState} from 'react';
import {PropsMovieScreen} from '../navigation/AppNavigation';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/Cast/Cast';
import MovieList from '../components/MovieList/MovieList';
import {fakeDataPerson} from '../constants/fakeData';

let {height, width} = Dimensions.get('window');

const MovieScreen = ({route, navigation}: PropsMovieScreen) => {
  const {item} = route.params;
  const [favourite, setFavourite] = useState(false);
  return (
    <ScrollView style={styles.wrapper}>
      <View style={{width: '100%'}}>
        <SafeAreaView style={styles.wrapperButtons}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon color="white" size={28} strokeWidth={2.5} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavourite(!favourite)}>
            <HeartIcon
              color={favourite ? 'red' : 'white'}
              size={28}
              strokeWidth={2.5}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <View>
        <Image
          source={require('../assets/spiderman.jpg')}
          style={{width, height: height * 0.55}}
        />
        <LinearGradient
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={[{width, height: height * 0.41}, styles.linearGradient]}
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
        />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Spider-Man: Across The Spider-Verse</Text>
        <Text>Released - 2020 - 170min</Text>
        <Text>Action - Thrill - Comedy</Text>
      </View>

      <View style={styles.description}>
        <Text>
          Dopo essersi riunito con Gwen Stacy, l'amichevole Spider-Man di
          Brooklyn Miles Morales viene catapultato nelle pieghe del multiverso,
          dove incontra la squadra di Spider-Eroi incaricata di proteggerne
          l'esistenza. Ma quando i protettori del multiverso si dimostrano
          intransigenti sul modo migliore per affrontare una nuova e temibile
          minaccia, Miles si ritrova solo contro gli altri Spider-Eroi a
          difendere il suo punto di vista. Tutto, pur di salvare la persona che
          ama di più al mondo.
        </Text>
      </View>

      <View style={{marginTop: 24}}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Top Cast
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10, marginTop: 20}}>
          {fakeDataPerson.map((person, index) => {
            return <Cast key={index} person={person} />;
          })}
        </ScrollView>
      </View>
      <MovieList title="Similar Movies" data={[1, 2, 3]} hideSeeAll />
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(23 23 23)',
    flex: 1,
  },
  backButton: {
    borderRadius: 12,
    padding: 1,
    backgroundColor: 'orange',
  },
  wrapperButtons: {
    paddingHorizontal: 16,
    position: 'absolute',
    zIndex: 20,
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
  },
  titleWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    maxWidth: 500,
    textAlign: 'center',
  },
  description: {
    paddingHorizontal: 8,
    maxWidth: 400,
  },
});
