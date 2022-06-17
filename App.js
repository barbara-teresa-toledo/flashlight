import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const app = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => { setToggle(oldToggle => !oldToggle) }

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle)
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={
            toggle
              ? style.lightOn
              : style.lightOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')} />

        <Image
          style={
            toggle
              ? style.logoLightOn
              : style.logoLightOff}
          source={require('./assets/icons/logo-barb.png')} />

        <Text style={
          toggle
            ? style.textLightOn
            : style.textLightOff}>
          Desenvolvido por @barbara-teresa-toledo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default app

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  logoLightOn: {
    paddingTop: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },

  logoLightOff: {
    paddingTop: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 200,
    height: 200,
  },

  textLightOn: {
    alignSelf: 'center',
    color: 'black',
  },

  textLightOff: {
    alignSelf: 'center',
    color: 'white',
  },

});