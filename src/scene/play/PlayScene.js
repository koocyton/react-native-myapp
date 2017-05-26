import React, {Component,} from 'react';
import {StyleSheet, ScrollView, View, Image, StatusBar, } from 'react-native';

class PlayScene extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Games',
    });

    games = [
        {cover: require('../../asset/image/01.png'), },
        {cover: require('../../asset/image/02.png'), },
        {cover: require('../../asset/image/03.png'), },
        {cover: require('../../asset/image/04.png'), },
        {cover: require('../../asset/image/05.png'), },
    ];

    static renderGameItem(game, i) {
        return <View key={i} detail={game} style={styles.game}>
            <Image style={styles.gameBackground} source={game.cover}/>
        </View>;
    };

    render() {

        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.games.map((game, i) => PlayScene.renderGameItem(game, i))
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
        backgroundColor: '#FFFFFF',
    },
    game: {
        height: 400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
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