/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {ICastProps} from './Cast.model';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigation';

const Cast = ({person}: ICastProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.push('PersonScreen', {personData: person})}>
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/castFoto.jpg')}
          style={styles.image}
        />
        <Text
          numberOfLines={1}
          style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
          {person.roleName}
        </Text>
        <Text style={{fontSize: 12}}>{person.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cast;

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  wrapper: {
    borderRadius: 100,
    height: 100,
    width: 100,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(115 115 115)',
  },
});
