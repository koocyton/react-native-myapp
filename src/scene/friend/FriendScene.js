import React, { Component, } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class FriendScene extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Friends',
        headerRight: (
            <View style={{marginRight:20}}>
                <Icon onPress={() => navigation.navigate('Invite')} name='md-person-add' size={20} color='#ffffff' />
            </View>
        ),
    });

    friends = [
        {name: '丝滑', portrait: require('../../asset/image/01.png'), level: 10},
        {name: '安东', portrait: require('../../asset/image/02.png'), level: 10},
        {name: '陈老师', portrait: require('../../asset/image/03.png'), level: 10},
        {name: '牛牛', portrait: require('../../asset/image/04.png'), level: 10},
        {name: '晓华', portrait: require('../../asset/image/05.png'), level: 10},
        {name: '丝滑', portrait: require('../../asset/image/01.png'), level: 10},
        {name: '安东', portrait: require('../../asset/image/02.png'), level: 10},
        {name: '陈老师', portrait: require('../../asset/image/03.png'), level: 10},
        {name: '牛牛', portrait: require('../../asset/image/04.png'), level: 10},
        {name: '晓华', portrait: require('../../asset/image/05.png'), level: 10},
        {name: '丝滑', portrait: require('../../asset/image/01.png'), level: 10},
        {name: '安东', portrait: require('../../asset/image/02.png'), level: 10},
        {name: '陈老师', portrait: require('../../asset/image/03.png'), level: 10},
        {name: '牛牛', portrait: require('../../asset/image/04.png'), level: 10},
        {name: '晓华', portrait: require('../../asset/image/05.png'), level: 10},
        {name: '丝滑', portrait: require('../../asset/image/01.png'), level: 10},
        {name: '安东', portrait: require('../../asset/image/02.png'), level: 10},
        {name: '陈老师', portrait: require('../../asset/image/03.png'), level: 10},
        {name: '牛牛', portrait: require('../../asset/image/04.png'), level: 10},
        {name: '晓华', portrait: require('../../asset/image/05.png'), level: 10},
    ];

    static renderGameItem(friend, i) {
        return <View key={i} detail={friend} style={styles.game}>
            <Image style={styles.portrait} source={friend.portrait}/>
            <Text style={styles.name}>{friend.name}</Text>
        </View>
    };

    render() {

        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.friends.map((friend,i)=>FriendScene.renderGameItem(friend,i))
                    }
                </ScrollView>
            </View>
        );
    };
}


let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    game: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flex: 1,
        padding:3,
        borderBottomWidth:1,
        borderBottomColor:'#EEEEEE',
        alignContent:'flex-start',
    },
    name: {
        height: 30,
        width: 150,
        padding: 14,
    },
    portrait: {
        height: 30,
        width: 30,
        padding: 10,
        left:10,
    },
});

module.exports = FriendScene;