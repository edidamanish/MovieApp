import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeIcon } from './../../assets';

const HomeScreen: FC = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
