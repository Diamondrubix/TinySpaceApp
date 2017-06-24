/**
 * Created by diamondrubix on 6/19/17.
 */
import React from 'react'
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';4
import SocketIOClient from 'socket.io-client'

//web sockets vs this? look into that
//socke = new WebSocket('ws://172.16.15.1:8090);

const socke = new WebSocket('ws://172.16.15.1:8090')


class socket extends React.Component {
    constructor(props) {
        super(props);
        socke.addEventListener('test',function(event){
            socke.send('Hello from react')
        })
        //this.socket = SocketIOClient('http://'+url+':'+port)
    }

    render() {
        //let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>just some text</Text>
        );
    }

    test() {
        console.warn('test')
        //socket.emit('test','hello world!')
    }
}

module.exports = socket