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

import * as Speech from 'expo-speech';


class Homescreen extends React.Component {

  

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null,
  };

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
           <View style={styles.slide1}>
          <Text style={styles.text}>Vaca - Finesse</Text>
<Image
            source={{
              uri:
                'https://codehs.com/uploads/0140585b0a57dda666aea48f557d405b',
            }}
            style={{
              height: 300,
              width: 280,
              alignItems: 'center',
              justifyItems: 'center',
            }}
          />
</View>


        <View style={styles.slide2}>
          

          
          <Text style={styles.text}>
            Before you get started this app will help you make that decision on where you and 
your family should go for their vacation .{'\n'} </Text>

<Text style={styles.text1}>
This app would include the following :{'\n'}
1)Best places to go in the country side{'\n'}
2)Best places to go (in my opinion) by a beach{'\n'}
3)Best places in the city to go on vacation if you are that type of person{'\n'}
4)hotels in each of these different spots{'\n'}

ENJOY!!!!! 
          </Text>

          <Image
            source={{
              uri:
                'https://codehs.com/uploads/0140585b0a57dda666aea48f557d405b',
            }}
            style={{
              height: 200,
              width: 180,
              alignItems: 'center',
              justifyItems: 'center',
            }}
          />

          
            
          
        </View>





        <View style={styles.slide3}>
          <Image
            source={{ uri: 'https://codehs.com/uploads/0140585b0a57dda666aea48f557d405b' }}
            style={{
              height: 100,
              width: 105,
              alignItems: 'center',
              justifyItems: 'center',
            }}
          />
          <Text style={styles.text}>The Different Categories </Text>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Countryside')}
>
            <View style={styles.touchableButton1}>
              <Text style={styles.text1}>
          
    1) On The Country Side

          
          </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Beachside')}
>
            <View style={styles.touchableButton1}>
              <Text style={styles.text1}>
          
    
2) Places By a Beach

          
          </Text>
            </View>
          </TouchableHighlight><TouchableHighlight onPress={() => this.props.navigation.navigate('City')}
>
            <View style={styles.touchableButton1}>
              <Text style={styles.text1}>
          
   
3) In the city
          
          </Text>
            </View>
          </TouchableHighlight>
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
  slideBox: {
    flexDirection: 'row',
  }
});


export default Homescreen;
