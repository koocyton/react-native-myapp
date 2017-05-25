import React, { Component, } from 'react';
import {StyleSheet, Text, View, StatusBar,} from 'react-native';

import {StackNavigator, } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

import PlayScene from './scene/play/PlayScene';
import FriendScene from './scene/friend/FriendScene';
//import NoticeScene from './scene/notice/NoticeScene';
//import MineScene from './scene/mine/MineScene';

import IconTabBar from './widget/IconTabBar';


// let TabsScene = React.createClass({
class TabsScene extends Component {

    tabIcons = [
        {name: 'play', activeIcon: 'ios-game-controller-b', inactiveIcon: 'ios-game-controller-b-outline'},
        {name: 'friends', activeIcon: 'ios-people', inactiveIcon: 'ios-people-outline'},
        {name: 'notice', activeIcon: 'ios-color-filter', inactiveIcon: 'ios-color-filter-outline'},
        {name: 'news', activeIcon: 'ios-contact', inactiveIcon: 'ios-contact-outline'}
    ];

    styles = StyleSheet.create({
        content: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            marginTop: 0,
            flex: 1
        }
    });

    render() {
        // status bar style
        StatusBar.setBarStyle('light-content');

        // tabBar
        return (
            <ScrollableTabView
                style={{flex: 1}}
                locked={true}
                scrollWithoutAnimation={true}
                tabBarPosition='bottom'
                renderTabBar={() => <IconTabBar
                    tabIcons={this.tabIcons}
                    activeColor='#6B8E23'
                    inactiveColor='#777777'
                    backgroundColor='#EFEFEF'
                    borderColor='#DFDFDF'
                    iconSize={35}
                />}>

                <View style={this.styles.content}>
                    <PlayScene />
                </View>

                <View style={this.styles.content}>
                    <FriendScene />
                </View>

                <View style={this.styles.content}>
                    <Text>Notice</Text>
                </View>

                <View style={this.styles.content}>
                    <Text>Mine</Text>
                </View>

            </ScrollableTabView>
        );
    }
}

/*
let Navigator = StackNavigator(
    {
        tabsScreen: { screen: TabsScene },
    },
    {
        navigationOptions: {
            headerStyle: {backgroundColor: '#333333',},
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
            title: null,
            showIcon: true,
        },
    }
);
*/
module.exports = TabsScene;