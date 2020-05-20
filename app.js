import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Beachside from './src/login/beachside.js';
import Countryside from './src/login/Countryside.js';
import City from './src/login/city.js';
import Hotelf from './src/login/hotelf.js';
import Hotela from './src/login/hotela.js';

const RootStack = createStackNavigator(
{
Home: { screen: Homescreen },
Beachside: { screen: Beachside },
Countryside: { screen: Countryside },
City: { screen: City },
Hotelf: { screen: Hotelf },
Hotela: { screen: Hotela },

},
{
initialRouteName: 'Home',
}

);

export default class App extends Component {
render() {
return <RootStack />;
}
}
