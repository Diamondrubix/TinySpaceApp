/**
 * Created by diamondrubix on 6/21/17.
 */
import React, { Component } from 'react';
import {Animated,AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
var poster = require('./PostRequest.js');
var FadeInView = require('./Fade.js')
class All extends React.Component {

    // onChange={this.handleChange};

    constructor(props) {
        super(props);
        //this.state = {post: '{title:"thing"'};
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
                                placeholder="Answer"
                                defaultValue={""}
                                onChangeText={(text) => (this.state.answer=text)}
                            />
                        </View>
                    </Animated.View>
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