import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import MovieCard from '../MovieCard/MovieCard';
import {ITrendingMoviesProps} from './TrendingMovies.model';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigation';

let {width} = Dimensions.get('window');

const TrendingMovies = ({data}: ITrendingMoviesProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onHandleClick = (item: number) => {
    navigation.navigate('MovieScreen', {item});
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Trending</Text>
      <Carousel
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.62}
        // eslint-disable-next-line react-native/no-inline-styles
        slideStyle={{display: 'flex', alignItems: 'center'}}
        inactiveSlideOpacity={0.61}
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={() => onHandleClick(item)} />
        )}
      />
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({
  title: {
    marginBottom: 24,
    marginLeft: 12,
    fontWeight: '700',
    color: 'white',
  },
  wrapper: {
    marginTop: 16,
  },
});
