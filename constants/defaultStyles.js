import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 20,
  },
});
