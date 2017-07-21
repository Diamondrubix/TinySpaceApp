import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
import Ask from './ask.js';
import Profile from './Profile.js'
import All from './AnswerPage.js'
import socket from './utility/socketManager.js'
var poster = require('./utility/PostRequest.js');


const MainScreenNavigator = TabNavigator({
    All: { screen: All },
    Ask: { screen: Ask },
    Profile: { screen: Profile},
},  {tabBarOptions: {
    activeTintColor: '#fefdff',
    activeBackgroundColor: '#8e46c9',
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