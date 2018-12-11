import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Dimensions} from 'react-native';
import posed from 'react-native-pose';

const window = Dimensions.get('window')


const Box =posed.View({
    visible: {
        x: -50,
        transition: { duration: 0 }
    },
    hidden: {
        transition: { duration: 5000, ease:'linear' },
        x: window.width +100,
    }
});
const Zombie1 = posed.Image({
    visible: {
        x: window.width + 100 + Math.random() * (500),
        transition: { duration: 0 }
    },
    hidden: {
        transition: { duration: 2000, ease:'linear' },
        x: -300 - Math.random() * (-100),
    }
});
const Zombie2 = posed.Image({
    visible: {
        x: window.width +100 + Math.random() * (500),
        transition: { duration: 0 }
    },
    hidden: {
        transition: { duration: 2000, ease:'linear' },
        x: -300 - Math.random() * (-100),
    }
});
const Zombie3 = posed.Image({
    visible: {
        x: window.width +100 + Math.random() * (500),
        transition: { duration: 0 }
    },
    hidden: {
        transition: { duration: 2000, ease:'linear' },
        x: -300 - Math.random() * (-100),
    }
});
const Zombie4 = posed.Image({
    visible: {
        x: window.width,
        transition: { duration: 0 }
    },
    hidden: {
        transition: { duration: 2000, ease:'linear' },
        x: -500,
    }
});


export default class DummyComponent extends Component {

    static navigationOptions = {
        title: 'Animation',
        headerStyle: {
            backgroundColor: '#32325b'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    }

    constructor(props){
        super(props);
        this.state = {
            isVisable:this.props.isVisable,
            zombie1:this.props.zombie1,
            zombie2:this.props.zombie2,
            zombie3:this.props.zombie3,
            zombie4:this.props.zombie4,
        }
    }
    static defaultProps ={
        isVisable: true,
        zombie1:true,
        zombie2:true,
        zombie3:true,
        zombie4:true,
    }
    componentDidMount() {
        setInterval(function(){
            this.setState({
                isVisable: false,
            })
            setTimeout(function(){
                this.setState({
                    isVisable:true
                })
            }.bind(this),4800)
            
        }.bind(this), 5000);
        setInterval(function(){
            this.setState({
                zombie1: false,
                zombie2: false,
                zombie3: false,
                zombie4: false,
            })
            setTimeout(function(){
                this.setState({
                    zombie1:true,
                    zombie2:true,
                    zombie3:true,
                    zombie4:true,
                })
            }.bind(this),2000)
            
        }.bind(this),2200);

    }


    render() {
        let toggle = this.state.isVisable ? 'true' : 'false'
        return (
            <View style={styles.bigBox}>
                <ImageBackground
                    source={require('../assets/day2.jpg')}
                    style={{width: '100%', height: '100%'}}
                > 
                    <View style={styles.topBox}>
                        <Box style={styles.sun} pose={this.state.isVisable ? 'visible' : 'hidden'}/>
                    </View>
                    <View style={styles.botBox}>
                        <View style={styles.SBox}>
                            <View style={styles.ZBox}>
                                <View>
                                    <Zombie1 style={{width:350,height:150, resizeMode:"contain", position:"absolute"}} 
                                        pose={this.state.zombie1 ? 'visible' : 'hidden'}
                                        source={require('../assets/zom_run.gif')}/>
                                </View>
                                <View>
                                    <Zombie2 style={{width:350,height:150, resizeMode:"contain", position:"absolute"}} 
                                        pose={this.state.zombie2 ? 'visible' : 'hidden'}
                                        source={require('../assets/zom_run.gif')}/>
                                </View>
                                <View>
                                    <Zombie3 style={{width:350,height:150, resizeMode:"contain", position:"absolute"}} 
                                        pose={this.state.zombie3 ? 'visible' : 'hidden'}
                                        source={require('../assets/zom_run.gif')}/>
                                </View>
                                <View>
                                    <Zombie4 style={{width:350,height:150, resizeMode:"contain", position:"absolute"}} 
                                        pose={this.state.zombie3 ? 'visible' : 'hidden'}
                                        source={require('../assets/running.gif')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    botBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBox: {
        flex: 1,
        justifyContent: 'center',
    },
    bigBox: {
        justifyContent: 'center',
    },
    box: {
        width:100,
        height:100,
        flex:1,
    },
    shooter:{
        height:150,
        resizeMode:"contain",
        flex:1,
    },
    SBox:{
        height:200,
        flexDirection: 'row',
        flex:1,
        alignItems:'flex-end',
    },
    text:{
        flex:1
    },
    ZBox:{
        flex:2,
        height:150,
        justifyContent:'flex-start'
    },
    background:{
        flex:1,
    },
    backgroundBox:{
        flexDirection:'row',
        flex:0,
        resizeMode:'contain'
    },
    sun:{
        borderWidth: 2,
        borderRadius: 75,
        width:50,
        height:50,
        backgroundColor:'yellow',
        borderColor:'orange',
        marginBottom:50,
    },
});


