/**
 * Created by diamondrubix on 6/20/17.
 */
import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./PostRequest.js');
import All from './All.js'
import post from './displayPost.js'


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        let display = this.props.text.r1;
        return (
            <Text>{display}</Text>
        );
    }
}


class Profile extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2','sup']),
        };
        getAllPost(this)
    }

    render() {
        return (
            <View>
                <View style = {{
                    height: 50,
                    alignItems: 'center',
                }}>
                    <Text style={styles.title}>{username}</Text>
                </View>

            </View>
        )
    }
}



function getAllPost(_this){
    data = {
        key:key,
        username:username,
    };
    poster.getAllPost(key,username)
        .then(function (result) {
            return result._bodyInit
        })
        .then(function (result) {
            return JSON.parse(result)
        })
        .then(function (result) {
            //_this.setState({title: result.title, content: result.content})
        })
        .catch(function (err) {
            
        })
    
}



const styles = StyleSheet.create({
    title: {
        color: '#292929',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'center'
    },
    content: {
        color: 'black',
        fontSize: 20,
        backgroundColor: '#fbffff',
    },
});

module.exports = Profile