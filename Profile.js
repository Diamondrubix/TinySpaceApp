/**
 * Created by diamondrubix on 6/20/17.
 */
import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./PostRequest.js');
import All from './answer.js'
import post from './displayPost.js'

class Profile extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {results:[{
            key:1,
            title: 'null',
        }]};
        getAllPost(this)
    }

    render() {
        const renderedButtons =  this.state.results.map(b => {
            return <Text key={b.key}>{b.title}</Text>
        });
        return (
            <View>
                {renderedButtons}
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
            return JSON.parse(result).result
        })
        .then(function (result) {
            for(var i =0; i<result.length;i++){
                result[i].key = (i+1)
            }
            return result
        })
        .then(function (result) {
            _this.setState({results:result})
            //_this.state.results = result
        })
        .catch(function (err) {
            console.warn("I guess there was a post request error in profile.js in the getAllPost method "+err)
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