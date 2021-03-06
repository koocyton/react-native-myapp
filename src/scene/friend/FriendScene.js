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
            <View style={styles.info}>
                <Text>Online</Text>
            </View>
            <View style={styles.info}>
                <Text>Lv10</Text>
            </View>
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
        height: 74,
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
        flex: 1,
        padding:3,
        borderBottomWidth:1,
        borderBottomColor:'#EEEEEE',
        alignContent:'flex-start',
    },
    info: {
        height: 50,
        marginRight: 8,
        marginTop: 26,
        marginBottom: 26,
    },
    name: {
        height: 30,
        flex: 1,
        marginLeft: 8,
        marginTop: 26,
        marginBottom: 26,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    portrait: {
        height: 60,
        width: 60,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 4,
        borderRadius: 4,
    },
});

module.exports = FriendScene;