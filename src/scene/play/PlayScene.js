
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    StatusBar,
    Button,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

class TabScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', { name: 'Jane' })}
            />
        );
    }
}

const Navigator = StackNavigator(
    {
        Tab: { screen: TabScreen },
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
);

let PlayScene = React.createClass({

    games : [
        {title:'长途',face:require('../../asset/image/01.png'),date:'2016.02.22',money:'332'},
        {title:'交通',face:require('../../asset/image/02.png'),date:'2016.02.23',money:'65'},
        {title:'住宿',face:require('../../asset/image/03.png'),date:'2016.02.24',money:'25'},
        {title:'餐饮',face:require('../../asset/image/04.png'),date:'2016.02.25',money:'125'},
        {title:'补助',face:require('../../asset/image/05.png'),date:'2016.02.26',money:'63'},
    ],

    renderGameItem(game , i) {
        return <View key={i} detail={game} style={styles.game}>
            <Image style={styles.gameBackground} source={game.face} />
        </View>;
    },

    render() {
        StatusBar.setBarStyle('light-content');

        return (
            <View style={styles.container}>
                <View style={{height:50}}>
                    <Navigator initialRoute={{statusBarHidden: false}} />
                </View>
                <View style={{flex:1}}>
                    <ScrollView keyboardDismissMode={'on-drag'}>
                        {
                            this.games.map((game,i)=>this.renderGameItem(game,i))
                        }
                    </ScrollView>
                </View>
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
        height:400,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        backgroundColor:'#EEEEEE',
        borderRadius:2,
        overflow:'hidden',
    },
    gameBackground: {
        height:400,
        flex: 1,
    }
});

module.exports = PlayScene;