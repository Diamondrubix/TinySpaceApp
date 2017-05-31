import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight} from 'react-native';
import HelloWorld from "react-native/local-cli/templates/HelloWorld/index.android";

var poster = require('./Post.js');
var username;
var password;

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
        this.state = {user: 'disadefault',password:'nopass'};
    }
    login=function(user,pass) {
        console.log("You tapped the button!")
        //this.setState({text: 'blablabla'})
        //poster.login("apost","hardcoded")
        poster.login(user,pass)
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    onChangeText={(text) => this.setState({user:text,password:this.state.password})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    onChangeText={(text) => this.setState({user:this.state.user,password:text})}
                />
                <Button title={"login"}
                        color={"#ae59f3"}
                    onPress={()=>{
                        this.login(this.state.user,this.state.password)
                        //this.login("tryit","another")
                }
                }/>
            </View>
        );
    }
}

class Main extends Component{
    render(){
        return(
            <View>
                <HelloWorldApp/>
                <LoginPage/>
            </View>
        )
    }
}
poster.testConnection()
poster.login("here","there")

//AppRegistry.registerComponent('TinySpaceApp', () => PizzaTranslator);
AppRegistry.registerComponent('TinySpaceApp', () => Main);
