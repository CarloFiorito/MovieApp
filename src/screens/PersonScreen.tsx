/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PropsPersonScreen} from '../navigation/AppNavigation';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import MovieList from '../components/MovieList/MovieList';
let {height, width} = Dimensions.get('window');
Platform;

const PersonScreen = ({navigation, route}: PropsPersonScreen) => {
  const {personData} = route.params;
  const [favourite, setFavourite] = useState(false);
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{paddingBottom: 20}}>
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

      {/* person details */}
      <View style={{marginTop: 40}}>
        <View style={styles.detailsWrapper}>
          <View style={styles.image}>
            <Image
              source={require('../assets/castFoto.jpg')}
              style={{height: height * 0.43, width: width * 0.74}}
            />
          </View>
          <View style={styles.nameDescription}>
            <Text style={styles.actorName}>{personData.name}</Text>
            <Text>{personData.birthPlace}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.dataCard}>
            <Text style={styles.dataCardTitle}>Gender</Text>
            <Text>{personData.gender}</Text>
          </View>
          <View style={[styles.dataCard, styles.borderCard]}>
            <Text style={styles.dataCardTitle}>Birthday</Text>
            <Text>{personData.birthday}</Text>
          </View>
          <View style={[styles.dataCard, styles.borderCardBoth]}>
            <Text style={styles.dataCardTitle}>Known for</Text>
            <Text>{personData.knownFor}</Text>
          </View>
          <View style={styles.dataCard}>
            <Text style={styles.dataCardTitle}>Popularity</Text>
            <Text>{personData.popularity}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bioWrapper}>
        <Text style={styles.bioTitle}>Biography</Text>
        <Text>{personData.biography}</Text>
      </View>
      <MovieList title="Movies" data={[1, 2, 3, 4]} hideSeeAll />
    </ScrollView>
  );
};

export default PersonScreen;

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
    zIndex: 20,
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'gray',
        shadowRadius: 40,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: 288,
    height: 288,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: 'rgb(115 115 115)',
    overflow: 'hidden',
    alignItems: 'center',
  },
  nameDescription: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 30,
  },
  actorName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 16,
    backgroundColor: 'rgb(64 64 64)',
    borderRadius: 9999,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataCard: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dataCardTitle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  borderCard: {
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderStyle: 'solid',
  },
  borderCardBoth: {
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderStyle: 'solid',
    borderRightColor: 'white',
    borderRightWidth: 1,
  },
  bioWrapper: {
    paddingHorizontal: 16,
    marginTop: 15,
  },
  bioTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});
