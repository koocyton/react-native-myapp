
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import KIconTabBar from '../compose/KIconTabBar';

import ScrollableTabView from 'react-native-scrollable-tab-view';

let MainScene = React.createClass({

    render() {
        return (
            <ScrollableTabView
                tabBarPosition='bottom'
                renderTabBar={() => <KIconTabBar/>}>

                <View style={styles.content} tabLabel='play'>
                    <Text>#1</Text>
                </View>

                <View style={styles.content} tabLabel='friends'>
                    <Text>#2</Text>
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
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});

module.exports = MainScene;