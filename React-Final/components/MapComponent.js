import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import Permissions from "react-native-permissions";
import { Dimensions } from 'react-native';

export default class MapComponent extends Component {

        static navigationOptions = {
        title: 'Maps',
        headerStyle: {
            backgroundColor: '#32325b'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    }
    constructor() {
        super();
        this.state = {
            region: {
                latitude: 0,
                latitudeDelta: 0,
                longitude: 0,
                longitudeDelta: 0
            },
            locationPermission: "unknown"
        };
    }

    _requestPermissions() {
        Permissions.request('location')
            .then(response => {
                this.setState({
                    locationPermission: response
                })
                console.log("Response: " + response);
            });
    }

    componentDidMount() {
        console.log('Start');
        this._requestPermissions();
        console.log('Check position');
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              region: {
                latitude: position.coords.latitude,
                latitudeDelta: 0.025,
                longitude: position.coords.longitude,
                longitudeDelta: 0.025
              }
            });
        },
            (error) => alert(JSON.stringify(error)));
    }
//to make scrollable remove views
    render() {
        const maps = [];
        return (
            <View>
                <View style={styles.top}>
                    
                </View>
                <MapView
                //liteMode 
                key={`map_1`}
                region={this.state.region}
                style={styles.bot}>
                
                <Marker coordinate={this.state.region}/>
                <Circle center={this.state.region} radius={500} />

                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    },
    top:{
        height:Dimensions.get('window').height*.1,
        width: Dimensions.get('window').width,
    },
    bot:{
        height:Dimensions.get('window').height*.9,
        width: Dimensions.get('window').width,
    }
})