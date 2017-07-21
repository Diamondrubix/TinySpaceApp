/**
 * Created by diamondrubix on 6/21/17.
 */
import React, { Component } from 'react';
import {Animated,AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./utility/PostRequest.js');
var socket = require('./utility/socketManager.js');
var FadeInView = require('./Fade.js')
class All extends React.Component {

    // onChange={this.handleChange};

    constructor(props) {
        super(props);
        //this.state = {post: '{title:"thing"'};
        this.url = 'no url'
        this.state = {post: 'disadefault',answer: 'no answer'};
        this.fade = new Animated.Value(0);
        this.faded = false;
        _this = this;

    }

    componentDidMount() {
        Animated.timing(                            // Animate over time
            this.fade,                      // The animated value to drive
            {
                toValue: 1,                             // Animate to opacity: 1, or fully opaque
            }
        ).start();                                  // Starts the animation

    }

    fadeOut(){
        Animated.timing(                            // Animate over time
            this.fade,                      // The animated value to drive
            {
                toValue: 0,                             // Animate to opacity: 1, or fully opaque
                duration: 50,
            }
        ).start();
    }
    fadeIn(){
        Animated.timing(                            // Animate over time
            this.fade,                      // The animated value to drive
            {
                toValue: 1, // Animate to opacity: 1, or fully opaque
                duration: 500,
            }
        ).start();
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <ScrollView>

                    <Animated.View                            // Special animatable View
                        style={{
                            opacity: this.fade         // Bind opacity to animated value
                        }}
                    >
                        <View style={{ backgroundColor: '#5082e5'}}>
                            <Text style={styles.title}>{posts.title}</Text>
                        </View>

                        <View style={{backgroundColor: '#fffdfe'}} >
                            <Text style={styles.content}>{posts.content}</Text>
                            <TextInput
                                style={{height: 40}}
                                placeholder="answer"
                                defaultValue={""}
                                onChangeText={(text) => (this.state.answer=text)}
                            />
                        </View>

                        <View>
                            <Text>answers go here</Text>
                        </View>
                    </Animated.View>
                    {/*this part is going to be for displaying answers*/}


                </ScrollView>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button title={"next post"}
                            color={"#ae59f3"}
                            onPress={()=> {
                                //var _this = this
                                //this.componentDidMount()
                                //this.fadeIn()
                                this.fadeOut()
                                setTimeout(()=>{
                                    this.fadeIn()
                                    getPost(this)
                                },50)
                            }}/>
                    <Button title={"post answer"}
                            onPress={()=>{

                                //console.warn(this.state.answer)
                                postAnswer(_this,this.state.answer)
                                //poster.sendPost('answer',answer)
                            }}/>
                </View>
            </View>

        );
    }
}

function postAnswer(_this,answer){
    socket.sendSocket('answer', {
        sid: key,
        url: _this.state.url,
        content: answer,
        test: 'just a random string sent from the phone for testing'
    })
}


//ok so this needs to change to the algorithm. This is what needs to be written into the server
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
            _this.url = result.url
            _this.setState({title: result.title, content: result.content,url: result.url})
            //socket.getAnswers()
            //postAnswer(_this,result.url) //left off here, remember to delete this comment
            return result
        })//i get answers from this point on
        .then(function (result){
            /*
            poster.getPostAnswers(key,result.url)
                .then(function(result){
                    return result._bodyInit
                })
                .then(function(result){
                    //answers= JSON.parse(result)
                })
                */
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