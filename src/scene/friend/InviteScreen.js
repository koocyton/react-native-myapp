import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
} from 'react-native';

class InviteScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'invite friend',
    });

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={styles.searchInput}
                               keyboardType='web-search'
                               placeholder='添加的好友 ID' />

                </View>
                <View style={[styles.platform, {marginTop:50, }]}>
                    <Text>Facebook 好友</Text>
                </View>
                <View style={styles.platform}>
                    <Text>微信 好友</Text>
                </View>
                <View style={styles.platform}>
                    <Text>附近的 好友</Text>
                </View>
                <View style={styles.platform}>
                    <Text>电话簿里的 好友</Text>
                </View>
            </View>
        );
    };
};

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#EEEEEE',
    },
    search:{
        height: 40,
        backgroundColor: '#EEEEEE',
    },
    searchInput:{
        height: 40,
        backgroundColor:'#FFFFFF',
        fontSize:15,
        textAlign:'center',
    },
    platform: {
        marginTop:1,
        height: 40,
        backgroundColor:'#FFFFFF',
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10,
    }
});

module.exports = InviteScreen;