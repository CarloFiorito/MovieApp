/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XMarkIcon} from 'react-native-heroicons/solid';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigation';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/Loading/Loading';
let {width, height} = Dimensions.get('window');

const SearchScreen = () => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  let movieName = 'Spider-Man Across the Spiderverse';
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          style={styles.input}
          onChangeText={text => setValue(text)}
          value={value}
        />
        <TouchableOpacity style={styles.button}>
          <XMarkIcon color="white" size={25} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          style={{marginTop: 12}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}>
          <View style={styles.cardsWrapper}>
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push('MovieScreen', {item})}>
                  <View style={styles.card}>
                    <Image
                      source={require('../assets/spiderman.jpg')}
                      style={styles.image}
                    />
                    <Text>
                      {movieName.length > 14
                        ? movieName.slice(0, 14) + '...'
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View>
          <Image
            source={require('../assets/movieTime.png')}
            style={{height: 384, width: 384}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(23 23 23)',
    flex: 1,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 9999,
    borderColor: 'rgb(115 115 115)',
    borderWidth: 1,
    paddingRight: 3,
  },
  input: {
    paddingBottom: 10,
    paddingLeft: 24,
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  button: {
    padding: 8,
    backgroundColor: 'rgb(115 115 115)',
    borderRadius: 9999,
  },
  card: {
    paddingRight: 12,
    marginBottom: 16,
  },
  image: {width: width * 0.33, height: height * 0.22, borderRadius: 8},
  wrapperRisults: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
