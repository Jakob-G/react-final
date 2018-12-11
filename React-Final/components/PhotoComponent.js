import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class DummyComponent extends Component {

    static navigationOptions = {
        title: 'Images',
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

        }
    }

    render() {
        return (
            <View>
            <Text>Test</Text>
            </View>
        )
    }
}