import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {DotIndicator} from 'react-native-indicators';
import {MessageContainer} from '../components/message-container';

const kettleBellImage = require('../../assets/images/kettlebell-image.jpeg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '75%',
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 20,
    backgroundColor: 'grey',
    opacity: 0.8,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
    backgroundColor: '#2097f7',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export const Profile = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://gloncfbtxi.execute-api.us-east-1.amazonaws.com/prod/register',
        {text, password},
      );
      if (response.status === 201) {
        setMessage('Sign up successful!');
        setBackgroundColor('#a8f25e');
      }
      return response.data;
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        setMessage(
          'The user name is already in use!\nPlease chose an different name.',
        );
        setBackgroundColor('#ff6700');
      }
      if (error.response.status === 503) {
        setMessage('Something went wrong!');
        setBackgroundColor('#c70906');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={kettleBellImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Name..."
            placeholderTextColor="white"
            style={styles.textInput}
            onChangeText={(newText) => setText(newText)}
          />
          <TextInput
            placeholder="Password..."
            placeholderTextColor="white"
            style={styles.textInput}
            secureTextEntry
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={registerUser}>
          <Text style={styles.buttonText}>
            {loading ? <DotIndicator color="white" size={5} /> : 'Enter'}
          </Text>
        </TouchableOpacity>

        <MessageContainer message={message} backgroundColor={backgroundColor} />
      </View>
    </ImageBackground>
  );
};