import {StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {IMovieCardProps} from './MovieCard.model';
let {width, height} = Dimensions.get('window');

const MovieCard = ({item, handleClick}: IMovieCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require('../../assets/spiderman.jpg')}
        style={styles.card}
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {width: width * 0.6, height: height * 0.4, borderRadius: 8},
});
