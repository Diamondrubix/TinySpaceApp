
import React from 'react-native';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,TouchableHighlight,ScrollView,StatusBar} from 'react-native';

import io from 'socket.io-client'

const socket = io('http://172.16.15.1:8090', {
    transports: ['websocket'],
})
console.ignoredYellowBox = ['Setting a timer']; //THIS IS A TERRIBLE SOLUTION, PLEASE FIX THIS BEFORE LAUNCH



exports.sendSocket = function(room,msg){
    socket.emit(room, msg)
    socket.on('postSent',(reply)=>{
        //this works.
        //console.warn(reply.message)
    })
    /*
    socket.on("newAnswer", (reply)=>{
        console.warn('new answer is '+reply)
    })*/
}

exports.getAnswers = function(msg){
    socket.emit('answer',{sid:key,content:msg,url:url})
}


exports.sendTest = function(){
    socket.emit('test','here is a thing')
    socket.on('test', (reply) =>{
        console.warn("the message from the server is "+reply)
    });
}
