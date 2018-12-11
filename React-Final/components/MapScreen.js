import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import MapComponent from './MapComponent';


export default class MapScreen extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <MapComponent/>
            </View>
        )
    }
}