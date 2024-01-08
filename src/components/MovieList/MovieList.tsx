import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigation';
let {width, height} = Dimensions.get('window');

const MovieList = ({title, data, hideSeeAll = false}) => {
  let movieName = 'Spider-Man Across the Spiderverse';
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.title}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.button}>See all</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 12}}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.push('MovieScreen', {item})}>
              <View style={styles.card}>
                <Image
                  source={require('../../assets/spiderman.jpg')}
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
        }}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    marginBottom: 16,
  },
  wrapperHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
  title: {
    marginBottom: 24,
    fontWeight: '700',
    color: 'white',
  },
  button: {
    color: 'orange',
  },
  card: {
    paddingRight: 12,
  },
  image: {width: width * 0.33, height: height * 0.22, borderRadius: 8},
});
