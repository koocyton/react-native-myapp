import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    StackNavigator,
} from 'react-navigation';


let InviteScreen = React.createClass({

    render() {
        const {
            navigate
        } = this.props.navigation;

        return (
            <View style={{backgroundColor:'#ffffff',}}>
                <Text>哈哈</Text>
            </View>
        );
    },
});

let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    person: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 1,
        backgroundColor: '#EEEEEE',
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    }
});

module.exports = InviteScreen;