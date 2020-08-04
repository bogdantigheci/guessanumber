import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/defaultStyles';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require('../assets/success.png')}
          //source={{ uri: 'https://i.ytimg.com/vi/z0pPhTLvzu4/hqdefault.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={DefaultStyles.body}>
        Your phone needed{' '}
        <Text style={DefaultStyles.highlight}>{props.roundsNumber}</Text> to
        rounds to guess the number{' '}
        <Text style={DefaultStyles.highlight}>{props.userNumber}</Text>
      </Text>
      <Text style={DefaultStyles.body}>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    width: '80%',
    marginHorizontal: 20,
  },
});

export default GameOverScreen;
