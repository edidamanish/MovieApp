import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient, Stop, Rect, Svg } from 'react-native-svg';

const LoginScreen: FC = () => {
  return (
    <View style={styles.conatiner}>
      <Image
        style={{
          marginTop: 0,
          width: '100%',
          backgroundColor: 'blue',
          height: '60%',
        }}
        source={require('../../../assets/images/encantoMirable.jpeg')}
        resizeMode={'cover'}
      />

      <View
        style={{
          marginTop: -40,
          marginBottom: 0,
          width: '100%',
          zIndex: 1,
        }}>
        <Svg width="100%" height={40}>
          <LinearGradient id="Gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="black" stopOpacity="0.1" />
            <Stop offset="0.5" stopColor="black" stopOpacity="0.5" />
            <Stop offset="1" stopColor="black" stopOpacity="1" />
          </LinearGradient>
          <Rect x="0" y="0" width="100%" height={40} fill="url(#Gradient)" />
        </Svg>
      </View>

      <View
        style={{
          width: '100%',
          height: '40%',
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            marginTop: 40,
            marginHorizontal: 20,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Login
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'User Name'}
          placeholderTextColor={'white'}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity>
          <Text
            style={{
              margin: 12,
              marginHorizontal: 20,
              color: 'white',
              fontSize: 20,
            }}>
            Create a new account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderBottomColor: 'white',
  },
});
