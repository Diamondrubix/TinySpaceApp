/**
 * Created by diamondrubix on 6/21/17.
 */
import React, { Component } from 'react';
import {AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./PostRequest.js');
class All extends React.Component {

    // onChange={this.handleChange};

    constructor(props) {
        super(props);
        //this.state = {post: '{title:"thing"'};
        this.state = {post: 'disadefault',answer: 'no answer'};
        _this = this;

    }
    render() {
        return(

            <View style={{flex: 1}}>
                <ScrollView>
                    <View style = {{flex: 20}}>
                        <View style={{ backgroundColor: '#5082e5'}}>
                            <Text style={styles.title}>{posts.title}</Text>
                        </View>

                        <View style={{backgroundColor: '#fffdfe'}} >
                            <Text style={styles.content}>{posts.content}</Text>
                            <TextInput
                                style={{height: 40}}
                                placeholder="Answer"
                                defaultValue={""}
                                onChangeText={(text) => (this.state.answer=text)}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button title={"next post"}
                            color={"#ae59f3"}
                            onPress={()=> {
                                //var _this = this
                                getPost(this)
                            }}/>
                    <Button title={"post answer"}
                            onPress={()=>{
                                var answer ={
                                    answer: this.state.answer,
                                }
                                poster.sendPost('answer',answer)
                            }}/>
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
        backgroundColor: '#deecef',
    },
});

module.exports = All