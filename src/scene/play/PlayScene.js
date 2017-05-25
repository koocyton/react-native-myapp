import React, {Component,} from 'react';
import {StyleSheet, ScrollView, View, Image, StatusBar,} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator, } from 'react-navigation';

// let PlayScene = React.createClass({
class PlayScreen extends Component {

    games = [
        {title: '长途', face: require('../../asset/image/01.png'), date: '2016.02.22', money: '332'},
        {title: '交通', face: require('../../asset/image/02.png'), date: '2016.02.23', money: '65'},
        {title: '住宿', face: require('../../asset/image/03.png'), date: '2016.02.24', money: '25'},
        {title: '餐饮', face: require('../../asset/image/04.png'), date: '2016.02.25', money: '125'},
        {title: '补助', face: require('../../asset/image/05.png'), date: '2016.02.26', money: '63'},
    ];

    renderGameItem(game, i) {
        return <View key={i} detail={game} style={styles.game}>
            <Image style={styles.gameBackground} source={game.face}/>
        </View>;
    };

    render() {
        // status bar style
        StatusBar.setBarStyle('light-content');

        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.games.map((game, i) => this.renderGameItem(game, i))
                    }
                </ScrollView>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    game: {
        height: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        overflow: 'hidden',
    },
    gameBackground: {
        height: 400,
        flex: 1,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    }
});


let PlayScene = StackNavigator(
    {
        playScreen: {screen: PlayScreen},
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

module.exports = PlayScene;