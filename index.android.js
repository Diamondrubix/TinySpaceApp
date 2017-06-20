import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight,ScrollView,StatusBar} from 'react-native';
import HelloWorld from "react-native/local-cli/templates/HelloWorld/index.android";
import { StackNavigator } from 'react-navigation';
import AllPage from './AllScreen.js';
import MainScreenNavigator from './tabnav.js';
var poster = require('./Post.js');
//var sockets = require('./socketManager.js');
var username;
var password;
key = "no key";
posts = {none: 'no posts'};

var ws = new WebSocket('ws://172.16.15.1/test');

ws.onopen = () => {
    // connection opened
    console.warn('did it send?')
    ws.send('something'); // send a message
};

class HelloWorldApp extends Component {

    render() {
        return (
            <Text>Welcome to TinySpace</Text>
        );
    }
}
//ae59f3

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {user: 'marc',password:'nohash',sessionKey:'not Logged in'};
    }

    static navigationOptions = {
        title: 'Welcome to TinySpace :D',
    };

    Switch2All=function(user,pass) {
        navigate('Chat')
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{padding: 10}}>
                <Text style={styles.title}>Welcome to TinySpace!</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    defaultValue={"marc"}
                    onChangeText={(text) => (this.state.user=text)}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    defaultValue={"nohash"}
                    onChangeText={(text) => (this.state.password = text)}
                />
                <Button title={"login"}
                        color={"#ae59f3"}
                        onPress={()=>{
                            var _this = this;
                            logged = "thing";
                            //this.state.sessionKey = 'odueau.nhu.a.u.a'
                            poster.login(this.state.user,this.state.password,'true')
                                .then(function (result) {
                                    logged = result._bodyInit;
                                    key = logged;
                                    _this.setState({user:_this.state.user,password:_this.state.password,sessionKey:logged})
                                    //_this.navigate('Chat')
                                    return logged
                                }).then(function (result) {
                                if(result != "bad Login") {
                                    start(navigate)
                                    //navigate('Main')

                                }
                                });

                            //this.login("tryit","another")
                        }
                        }/>
                <Text>{(this.state.sessionKey).toString()}</Text>

            </View>
        );
    }
}

function start(navigate){
    poster.AllPage(key)
        .then(function (result) {
            //posts = result._bodyInit
            //_this.setState({post: result._bodyInit})
            return result._bodyInit
        })
        .then(function (result) {
            return JSON.parse(result)
        })
        .then(function(result){
            posts = result
        })
        .then(function () {
            navigate('Main')
        })
}

/*(text) => this.setState({user:text,password:this.state.password})
 * (this.state.sessionKey).toString()*/
class Main extends Component{
    render(){
        return(
            <View>
                <LoginPage/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#ae59f3',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

const SimpleApp = StackNavigator({
    Home: { screen: LoginPage },
    Main: { screen: MainScreenNavigator },
},
    { headerMode: 'none' }

);

AppRegistry.registerComponent('TinySpaceApp', () => SimpleApp);