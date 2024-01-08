import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import {IDataPerson} from '../constants/fakeData';
import SearchScreen from '../screens/SearchScreen';
export type RootStackParamList = {
  Home: undefined;
  MovieScreen: {
    item: number;
  };
  PersonScreen: {
    personData: IDataPerson;
  };
  SearchScreen: undefined;
};

export type PropsMovieScreen = NativeStackScreenProps<
  RootStackParamList,
  'MovieScreen'
>;
export type PropsPersonScreen = NativeStackScreenProps<
  RootStackParamList,
  'PersonScreen'
>;
const AppNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="MovieScreen"
          options={{headerShown: false}}
          component={MovieScreen}
          initialParams={{item: 0}}
        />
        <Stack.Screen
          name="PersonScreen"
          options={{headerShown: false}}
          component={PersonScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          options={{headerShown: false}}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
