import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Constants from 'expo-constants';




class Hotelf extends React.Component {

  

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null,
  };

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
           <View style={styles.slide1}>
            <Text style={styles.text}>Florida </Text>
          <View style={styles.slideBox}>
          <Text style={styles.text1}>
          1) The Mayfair at Coconut Grove
          </Text>
   <Image
            source={{ uri: 'https://pix10.agoda.net/hotelImages/5443540/0/f29070c84bcfe122384a44cfb464a1e7.jpg?s=1024x768' }}
            style={{
              height: 100,
              width: 105,
              alignItems: 'center',
              justifyItems: 'center',
            }}
          />
          </View>
</View>


        <View style={styles.slide2}>
           <View style={styles.slideBox}>
          <Text style={styles.text1}>
2)Coniad Miami
</Text> 
 <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={{
              height: 100,
              width: 105,
              alignItems: 'center',
              justifyItems: 'center',
            }}
          />
</View>

          
          
          </View>

          

          
            
          
        






</Swiper>
    );
  }
}
          
             
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },slide7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },slide8: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },slide9: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },slide10: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13Ce66',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  text1: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  touchableButton1: {
    backgroundColor: 'orange',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Press Start 2P',
  },
  
});


export default Hotelf;
