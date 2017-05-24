
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view';

import PlayScene from './scene/play/PlayScene';
import FriendScene from './scene/friend/FriendScene';
import NoticeScene from './scene/notice/NoticeScene';
import MineScene from './scene/mine/MineScene';

import IconTabBar from './widget/IconTabBar';

let MainScene = React.createClass({

    tabIcons : [
        { name: 'play',    activeIcon : 'ios-game-controller-b', inactiveIcon : 'ios-game-controller-b-outline' },
        { name: 'friends', activeIcon : 'ios-people', inactiveIcon : 'ios-people-outline' },
        { name: 'notice',  activeIcon : 'ios-color-filter', inactiveIcon : 'ios-color-filter-outline' },
        { name: 'news',    activeIcon : 'ios-contact', inactiveIcon : 'ios-contact-outline' }
    ],

    render() {

        return (
            <ScrollableTabView style={{flex:1}}
                tabBarPosition='bottom'
                scrollWithoutAnimation={true}
                renderTabBar={()=><IconTabBar
                    tabIcons={this.tabIcons}
                    activeColor='#6B8E23'
                    inactiveColor='#777777'
                    backgroundColor='#EFEFEF'
                    borderColor='#DFDFDF'
                    iconSize={35}
                />}>

                <View style={styles.content}>
                    <PlayScene />
                </View>

                <View style={styles.content}>
                    <FriendScene />
                </View>

                <View style={styles.content}>
                    <NoticeScene />
                </View>

                <View style={styles.content}>
                    <MineScene />
                </View>

            </ScrollableTabView>
        );
    }
});

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop:0,
        flex: 1
    },
});

module.exports = MainScene;