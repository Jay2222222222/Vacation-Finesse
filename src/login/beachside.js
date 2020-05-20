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




class Beachside extends React.Component {





render() {
return (
<Swiper style={styles.wrapper} showsButtons={true}>




<View style={styles.slide1}>
<Image
source={{
uri:
'https://codehs.com/uploads/0140585b0a57dda666aea48f557d405b',
}}
style={{
height: 100,
width: 100,
alignItems: 'center',
justifyItems: 'center',
}}
/>

<Text style={styles.text}>Beach Side </Text>




<TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}
>
<View style={styles.touchableButton1}>
<Text style={styles.text1}>


GO BACK

</Text>
</View>
</TouchableHighlight>

</View>
<View style={styles.slide2}>
<Text style={styles.text1}>
1) Atlantic City
</Text>
<Image
source={{
uri:
'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/04/featuredimage-shutterstock_724905580.jpg',
}}
style={{
height: 300,
width: 300,
alignItems: 'center',
justifyItems: 'center',
}}
/>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Hotela')}
>
<View style={styles.touchableButton1}>
<Text style={styles.text1}>


Hotela

</Text>
</View>
</TouchableHighlight>
</View>
<View style={styles.slide3}>
<Text style={styles.text1}>
2)Miami, Florida
</Text>
<Image
source={{
uri:
'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Florida/Miami/south-beach-miami-beach-lead-image.jpg',
}}
style={{
height: 300,
width: 300,
alignItems: 'center',
justifyItems: 'center',
}}
/>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Hotelf')}
>
<View style={styles.touchableButton1}>
<Text style={styles.text1}>


Hotelf

</Text>
</View>
</TouchableHighlight>
</View>
<View style={styles.slide4}>
<Text style={styles.text1}>
3)Malibu, California
</Text>
<Image
source={{
uri:
'https://media.timeout.com/images/105150644/image.jpg',
}}
style={{
height: 300,
width: 300,
alignItems: 'center',
justifyItems: 'center',
}}
/>
</View>
<View style={styles.slide5}>
<Text style={styles.text1}>
4) Santa Monica
</Text>
<Image
source={{
uri:
'https://www.californiabeaches.com/wp-content/uploads/2014/09/bigs-Santa-Monica-State-Beach-looking-at-the-pier-from-south-959976-Large-e1491334964562.jpg',
}}
style={{
height: 300,
width: 300,
alignItems: 'center',
justifyItems: 'center',
}}
/>
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


export default Beachside;
