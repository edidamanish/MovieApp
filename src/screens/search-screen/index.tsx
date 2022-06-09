import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchScreen: FC = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
});
