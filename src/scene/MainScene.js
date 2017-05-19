
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

var MainScene = React.createClass({

    render() {
        return (
            <ScrollableTabView
                tabBarPosition='bottom'
                renderTabBar={() => <DefaultTabBar/>}>
                <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text>
                <Text tabLabel='Tab #4'>favorite</Text>
            </ScrollableTabView>
        );
    }
});

module.exports = MainScene;