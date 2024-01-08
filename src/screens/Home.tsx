/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import TrendingMovies from '../components/TrendingMovies/TrendingMovies';
import Navbar from '../components/Navbar/Navbar';
import MovieList from '../components/MovieList/MovieList';
import Loading from '../components/Loading/Loading';

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* trending movies */}
          <TrendingMovies data={trending} />
          {/* upcoming movies */}
          <MovieList title="Upcoming" data={upcoming} />
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(23 23 23)',
    flex: 1,
  },
});
