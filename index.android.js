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
        this.state = {text: 'disadefault',};
        this.user = ""
    }
    _onPressButton() {
        console.log("You tapped the button!");
        poster.login(this.state.text,"hardcoded")
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    onChangeText={(text) => this.setState({text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    onChangeText={(text) => this.setState({text})}
                />
                <Button
                    style={{fontSize: 20}}
                    title="login"
                    onPress={this._onPressButton}
                    color="#841584">
                    Press Me!
                </Button>
            </View>
        );
    }
}

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
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

//AppRegistry.registerComponent('TinySpaceApp', () => PizzaTranslator);
AppRegistry.registerComponent('TinySpaceApp', () => Main);
