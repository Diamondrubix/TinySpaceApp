import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight,ScrollView} from 'react-native';
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
        this.state = {user: 'disadefault',password:'nopass',sessionKey:'not Logged in'};
    }
    login=function(user,pass) {
        //this.setState({text: 'blablabla'})
        //poster.login("apost","hardcoded")
        return poster.login(user,pass,"true")
    }


    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="UserName"
                    onChangeText={(text) => (this.state.user=text)}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="password"
                    onChangeText={(text) => (this.state.password = text)}
                />
                <Button title={"login"}
                        color={"#ae59f3"}
                    onPress={()=>{
                        var _this = this
                        logged = "thing"
                        //this.state.sessionKey = 'odueau.nhu.a.u.a'
                        poster.login(this.state.user,this.state.password,'true')
                            .then(function (result) {
                                logged = result._bodyInit
                                _this.setState({user:_this.state.user,password:_this.state.password,sessionKey:logged})
                            })


                        //this.login("tryit","another")
                }
                }/>
                <Text>{(this.state.sessionKey).toString()}</Text>

            </View>
        );
    }
}
/*(text) => this.setState({user:text,password:this.state.password})
* (this.state.sessionKey).toString()*/
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

page = 1;
//AppRegistry.registerComponent('TinySpaceApp', () => PizzaTranslator);
if(page =1) {
    AppRegistry.registerComponent('TinySpaceApp', () => Main);
}