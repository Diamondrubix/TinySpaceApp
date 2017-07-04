/**
 * Created by diamondrubix on 6/20/17.
 */
import React, { Component } from 'react';
import {Modal,AppRegistry, Text, Image, View, StyleSheet,TextInput, ListView, Alert,Button,Touchable,ScrollView} from 'react-native';
import { TabNavigator } from "react-navigation";
var poster = require('./PostRequest.js');
class Ask extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {post: '{title:"thing"'};
        this.state = {modalVisible: false, title: 'disadefault',tags: 'ok?',question: 'nothing here'};
        //this.modalVisible = true;
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
            >
                <Button
                    style = {{}}
                    title={'your post as been submited'}
                    color={"#ae59f3"}
                    onPress={()=>{
                        this.setModalVisible(!this.state.modalVisible)
                    }}

                >

                </Button>

            </Modal>
                <View style = {{
                    height: 50,
                    backgroundColor:'#8e46c9',
                    alignItems: 'center',
                }}>
                    <Text style={styles.title}>Create A Post!</Text>
                </View>
                <View style = {{
                    backgroundColor: '#fffdfe',
                }}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Post Title!"
                        defaultValue={""}
                        onChangeText={(text) => (this.state.title=text)}
                    />
                    <TextInput
                        style={{height: 40}}
                        placeholder="Tags!"
                        defaultValue={""}
                        onChangeText={(text) => (this.state.tags=text)}
                    />
                    <TextInput
                        style={{height: 100}}
                        placeholder="All of your beautiful tiny questions go here!"
                        defaultValue={""}
                        onChangeText={(text) => (this.state.question=text)}
                    />
                    <Button title={"post"}
                            color={"#ae59f3"}
                            onPress={()=> {
                                this.setModalVisible(!this.state.modalVisible)
                                let tags = new Array()
                                tags.push('mobile')
                                poster.sendPost('phoneQuery',{
                                    username:this.state.username,
                                    title:this.state.title,
                                    content:this.state.question,
                                    tags:tags,
                                    date:new Date(),
                                    url:'url?',
                                })
                            }}/>


                </View>

            </View>

        )
    }
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
        backgroundColor: '#fbffff',
    },
});

module.exports = Ask