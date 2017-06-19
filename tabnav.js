import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
var poster = require('./Post.js');


class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
    }

    render() {
        //let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{post}</Text>
        );
    }
}

class All extends React.Component {

   // onChange={this.handleChange};

    constructor(props) {
        super(props);
        //this.state = {post: '{title:"thing"'};
        this.state = {post: 'disadefault',answer: 'no answer'};
        _this = this;

    }
    render() {
        /*

         */
        return(

            <View style={{flex: 1}}>
                <View style={{flex: 2, backgroundColor: '#5082e5'}}>
                    <View>
                        <Text style={styles.title}>{posts.title}</Text>
                    </View>
                </View>
                <View style={{flex: 20, backgroundColor: '#fbffff'}} >
                    <View>
                        <Text style={styles.content}>{posts.content}</Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Answer"
                            defaultValue={""}
                            onChangeText={(text) => (this.state.answer=text)}
                        />
                        <Button title={"next post"}
                                color={"#ae59f3"}
                                onPress={()=> {
                                    //var _this = this
                                    getPost(this)

                                }}/>
                        <Button title={"post answer"}
                                onPress={()=>{
                                //thing here

                                }}/>
                    </View>
                </View>
            </View>



        );
    }
}
function getPost(_this){
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
            return posts
        })
        .then(function (result) {
            _this.setState({title: result.title, content: result.content})
        })
}

const styles = StyleSheet.create({
    title: {
        color: '#fbffff',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'center'
    },
    content: {
        color: 'black',
        fontSize: 20,
        backgroundColor: '#efefef',
    },
});


class Ask extends React.Component {
    render() {
        return <Text>this is the questions page</Text>
    }
}

class Profile extends React.Component {
    render() {
        return <Text>this is the profile Page</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    All: { screen: All },
    Ask: { screen: Ask },
    Profile: { screen: Profile},
},  {tabBarOptions: {
    activeTintColor: '#fefdff',
    labelStyle: {
        fontSize: 12,
    },
    style: {
        backgroundColor: '#ae59f3',
    },
}});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

module.exports = MainScreenNavigator