import {Dimensions, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Loading = () => {
  return (
    <View style={[styles.wrapper, {height, width}]}>
      <Progress.CircleSnail thickness={12} size={160} color="#eab308" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
