import React, { Component, } from 'react';
import {StatusBar,} from 'react-native';

import {StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import TabBarItem from './widget/TabBarItem'
import PlayScene from './scene/play/PlayScene';
import FriendScene from './scene/friend/FriendScene';
import NoticeScene from './scene/notice/NoticeScene';
import MineScene from './scene/mine/MineScene';

import InviteScreen from './scene/friend/InviteScreen';


const TabsScene = TabNavigator(
    {
        Play: {
            screen: PlayScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Play',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        activeIcon='ios-game-controller-b'
                        inactiveIcon='ios-game-controller-b-outline'
                    />
                )
            }),
        },
        Friends: {
            screen: FriendScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Friends',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        activeIcon='ios-people'
                        inactiveIcon='ios-people-outline'
                    />
                )
            }),
        },
        Notice: {
            screen: NoticeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Notice',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        activeIcon='ios-color-filter'
                        inactiveIcon='ios-color-filter-outline'
                    />
                )
            }),
        },
        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Mine',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        activeIcon='ios-contact'
                        inactiveIcon='ios-contact-outline'
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#6B8E23',
            inactiveTintColor: '#ADADAD',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

let Navigator = StackNavigator(
    {
        Tabs: { screen: TabsScene },

        Invite: { screen: InviteScreen },
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: '#333333', },
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
            // title: null,
            showIcon: true,
        },
    }
);

class RootScene extends Component {

    constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator />
        )
    }
}

module.exports = RootScene;