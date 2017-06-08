import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
});
AppRegistry.registerComponent('TinySpaceApp', () => MainScreenNavigator);