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





class Hotela extends React.Component {





render() {

return (

<Swiper style={styles.wrapper} showsButtons={true}>

<View style={styles.slide1}>

<Text style={styles.text}>Atlantic City </Text>

<View style={styles.slideBox}>

<Text style={styles.text1}>

1) Atlantic Palace

</Text>

<Image

source={{ uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/185/185087944.jpg' }}

style={{

height: 300,

width: 300,

alignItems: 'center',

justifyItems: 'center',

}}

/>

</View>

</View>



<View style={styles.slide2}>

<View style={styles.slideBox}>

<Text style={styles.text1}>

2)Ocean Casino Resort

</Text>

<Image

source={{ uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/148/148060988.jpg' }}

style={{

height: 300,

width: 300,

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



export default Hotela;




