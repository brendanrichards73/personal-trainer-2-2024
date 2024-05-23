import React from 'react';
import {Text, View} from 'react-native';

const styles = (backgroundColor) => ({
  container: {
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    width: '75%',
    height: '15%',
    backgroundColor: `${backgroundColor}`,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'serif',
  },
});

export const MessageContainer = ({message, backgroundColor}) => {
  console.log('backgroundColor', backgroundColor);
  if (message === '') {
    return null;
  }
  return (
    <View style={[styles(backgroundColor).container]}>
      <Text style={[styles().text]}>{message}</Text>
    </View>
  );
};