import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
var poster = require('./Post.js');




class RenderPost extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
    }

    render() {
        //let display = this.state.showText ? this.props.text : ' ';
        let post = this.props.text
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
        this.state = {post: 'disadefault'};
        _this = this;
        /*
        poster.AllPage(key)
            .then(function (result) {
                //_this.setState({post: JSON.parse(result._bodyInit)})
                _this.setState({post: result._bodyInit})
                //_this.state.post = "da string of the day"
            })
            */
        //this.change(this)

    }
    render() {
        //<RenderPost text={JSON.parse(this.state.post)}/>

        return(
            <View>
                <Text>
                    {posts.title}
                    {"\n"+posts.content}

                </Text>
            </View>
        );
    }
}




class Leader extends React.Component {
    render() {
        return <Text>this is the leaderboard</Text>
    }
}

class Profile extends React.Component {
    render() {
        return <Text>this is the profile Page</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    All: { screen: All },
    Leader: { screen: Leader },
    Profile: { screen: Profile},
});

MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};

module.exports = MainScreenNavigator