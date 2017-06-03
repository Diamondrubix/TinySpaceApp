import React from 'react';
import {
    AppRegistry,
    Text,
    View,Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class AllPage extends React.Component {
    static navigationOptions = {
        title: 'AllPage',
    };
    render() {
        return (
            <View>
                <Text>this is the All Page</Text>
            </View>
        );
    }
}

module.exports = AllPage