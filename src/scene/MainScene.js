
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import IconTabBar from '../compose/IconTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import GameScene from './GameScene';
import FriendScene from './FriendScene';

let MainScene = React.createClass({

    render() {
        return (
            <ScrollableTabView style={{flex:1}}
                tabBarPosition='bottom'
                scrollWithoutAnimation={true}
                renderTabBar={() => <IconTabBar/>}>

                <View style={styles.content} tabLabel='play'>
                    <GameScene />
                </View>

                <View style={styles.content} tabLabel='friends'>
                    <FriendScene />
                </View>

                <View style={styles.content} tabLabel='news'>
                    <Text>#3</Text>
                </View>

                <View style={styles.content} tabLabel='me'>
                    <Text>#4</Text>
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
        flex: 1
    }
});

module.exports = MainScene;