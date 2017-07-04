/**
 * Created by diamondrubix on 6/22/17.
 */
import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./PostRequest.js');4

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
        backgroundColor: '#deecef',
    },
});

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {results:[{
            key:1,
            title: 'null',
        }]};
        getAllPost(this)
    }

    render() {
        const renderedButtons =  this.state.results.map(b => {
            return (
                <View key={b.key}>
                    <View style={{ backgroundColor: '#5082e5'}}>
                        <Text style ={styles.title}>{b.title}</Text>
                    </View>
                    <View style={{backgroundColor: '#fffdfe'}}>
                        <Text style = {styles.content}>{b.content}</Text>
                    </View>
                </View>
            )
        });
        return (
            <ScrollView>
                {renderedButtons}
            </ScrollView>
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


export default Post;