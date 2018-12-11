import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, Image, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import {ImagePicker} from 'expo';
import { ButtonGroup } from "react-native-elements";
import { LinearGradient } from 'expo';

export default class DummyComponent extends Component {

    static defaultProps = {
        top:0,
        right:0,
        width:200,
        height:200,
    }

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

    constructor(props) {
        super(props)
        this.state = {
            image:null,
            top:this.props.top,
            right:this.props.right,
            width:this.props.width,
            height:this.props.height,
        }
        this.updateImage = this.updateImage.bind(this);
    }

    

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            aspect:[5,5],
        });
        if (!result.cancelled){
            this.setState({
                image: result.uri
            })
        }
    }

    updateImage (selectedIndex) {
        if (selectedIndex == 0) {
            this.setState({right: this.state.right+5})
        }else if (selectedIndex == 1) {
            this.setState({right: this.state.right-5})
        }else if (selectedIndex == 2) {
            this.setState({top:this.state.top-5})
        }else if (selectedIndex == 3) {
            this.setState({top:this.state.top+5})
        }else if (selectedIndex == 4) {
            this.setState({
                width:this.state.width+5,
                height:this.state.height+5
            })
        }else if (selectedIndex == 5) {
            this.setState({
                width:this.state.width-5,
                height:this.state.height-5
            })
        }
    }

    render() {
        let {image} = this.state;
        const buttons = ['Left', 'Right', 'Up', 'Down', 'Bigger', 'Smaller']
        return <LinearGradient colors={["#000000", "#0000bb"]} style={StyleSheet.absoluteFill}>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}> 
                <View style={{
                flex:2,
                alignItems:'center',
                justifyContent:'center'
                }}>
                    <Button
                        title="Pick an image from camera roll"
                        onPress={this._pickImage}
                    />
                </View>
                <View  style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                    }}>
                    <ButtonGroup onPress={this.updateImage} buttons={buttons} containerStyle={styles.buttons} textStyle={{ color: "lightblue" }} />
                </View>
                <View style={{
                flex:6,
                alignItems:'center',
                justifyContent:'center'
                }}>
                    {!image && <ActivityIndicator/>}
                    {image &&
                        <Image source={{
                            uri:image
                        }} style ={{
                            width:this.state.width,
                            height:this.state.height,
                            top:this.state.top,
                            right:this.state.right,
                        }} />}
                </View>
            </View>
        </LinearGradient>;
    }
}

const styles = StyleSheet.create({
  buttons: { 
      flex: 1,
      marginLeft: Dimensions.get('window').width * 0.025,
      width: Dimensions.get('window').width * 0.95,
      backgroundColor: "#32325b"
    }
});
