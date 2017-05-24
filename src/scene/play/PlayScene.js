import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    Button,
    Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    StackNavigator,
} from 'react-navigation';




// class GameScreen extends React.Component {
let GameScreen = React.createClass({

    games : [
        {title: '长途', face: require('../../asset/image/01.png'), date: '2016.02.22', money: '332'},
        {title: '交通', face: require('../../asset/image/02.png'), date: '2016.02.23', money: '65'},
        {title: '住宿', face: require('../../asset/image/03.png'), date: '2016.02.24', money: '25'},
        {title: '餐饮', face: require('../../asset/image/04.png'), date: '2016.02.25', money: '125'},
        {title: '补助', face: require('../../asset/image/05.png'), date: '2016.02.26', money: '63'},
    ],

    renderGameItem(game, i) {
        return <View key={i} detail={game} style={styles.game}>
            <Image style={styles.gameBackground} source={game.face}/>
        </View>;
    },

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{backgroundColor:'#ffffff',}}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.games.map((game,i)=>this.renderGameItem(game,i))
                    }
                </ScrollView>
            </View>
        );
    },
});

const GameNavigator = StackNavigator(
    {
        gameScreen: { screen: GameScreen },
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: '#333333', },
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
            title: '狼人杀',
            showIcon: true,
            headerRight: <View style={{marginRight:20}}>
                <Icon name='ios-people-outline' size={25} color='#ffffff' />
            </View>
        },
    }
);

let PlayScene = React.createClass({

    render() {
        StatusBar.setBarStyle('light-content');
        // StatusBar.setBackgroundColor('#333333');

        return (
            <View style={styles.container}>
                <GameNavigator initialRoute={{statusBarHidden: false}}/>
            </View>
        );
    }
});


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

module.exports = PlayScene;