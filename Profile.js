/**
 * Created by diamondrubix on 6/20/17.
 */
import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./utility/PostRequest.js');
import All from './AnswerPage.js'
import Post from './displayPost.js'


class Profile extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {results:[{
            key:1,
            title: 'null',
        }]};
    }

    render() {
        return (
            <View>
                <Post/>
            </View>
        )
    }
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