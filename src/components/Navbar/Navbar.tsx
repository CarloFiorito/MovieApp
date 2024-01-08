import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigation';

const Navbar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.headerWrapper}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
        <Text style={styles.headerTitle}>
          <Text style={styles.headerTitleSpan}>M</Text>ovies
        </Text>
        <TouchableOpacity onPress={() => navigation.push('SearchScreen')}>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  headerTitleSpan: {
    color: 'orange',
  },
});
