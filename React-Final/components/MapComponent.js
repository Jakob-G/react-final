import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import Permissions from "react-native-permissions";
import { Dimensions } from 'react-native';
// https://www.mapquestapi.com/geocoding/v1/address?key=lMGA4JJTNMA2NmvIn9GNEyg4lU32GTv4&inFormat=kvp&outFormat=json&location=******&thumbMaps=false
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



    fetchTodos(location){
        fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=lMGA4JJTNMA2NmvIn9GNEyg4lU32GTv4&inFormat=kvp&outFormat=json&location=${location}*&thumbMaps=false`)
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                region: {
                    latitude: response.results[0].locations[0].latLng.lat,
                    latitudeDelta: 0.025,
                    longitude: response.results[0].locations[0].latLng.lng,
                    longitudeDelta: 0.025
                }
            });
        })
    }

    _requestPermissions() {
        Permissions.request('location')
            .then(response => {
                this.setState({
                    locationPermission: response
                })
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
    render() {
        const maps = [];
        return (
            <View>
                <View style={styles.top}>
                    <TextInput style={{
                    height:'100%',
                    width:'100%',
                    borderColor:'gray',
                    borderWidth:1,
                    textAlign:'center'
                    }}
                    placeholder="Enter a Destination"
                    onSubmitEditing={(event)=> this.fetchTodos(event.nativeEvent.text)}
                    />
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