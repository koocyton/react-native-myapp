
import React, { Component, } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';


class MineScene extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Mine',
    });

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
};


let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        height:100,
        backgroundColor:'#FFFFFF',
    }
});

module.exports = MineScene;