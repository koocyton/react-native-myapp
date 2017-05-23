import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';


let NoticeScene = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                </ScrollView>
            </View>
        );
    }
});


let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop:20,
        backgroundColor:'#FFFFFF',
    }
});

module.exports = NoticeScene;