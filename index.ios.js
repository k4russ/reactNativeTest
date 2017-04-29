/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StatusBar,
    ScrollView,
    ListView
} from 'react-native';

import Gallery from './components/Gallery.js';

var screen = require('Dimensions').get('window');

class MainModule extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

        };
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: "#384e78"}}>

                <StatusBar hidden={true} />
                <Text style={{color: 'white', textAlign: 'center', marginTop: 10, fontSize: 20 }} >Metallica</Text>
                <Text style={{color: '#dddddd55', textAlign: 'center', marginTop: 5, marginBottom: 10, fontSize: 7 }} >МЕТАЛ КОНЦЕРТ 16+</Text>
                <View style={{backgroundColor:'transparent',  width:screen.width - 10, left:5, height: 200}} >
                    <Gallery/>
                </View>

            </ScrollView>
        );
    }
}




AppRegistry.registerComponent('AwesomeProject', () => MainModule);
