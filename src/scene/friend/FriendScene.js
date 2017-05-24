import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    StackNavigator,
} from 'react-navigation';

let PersonScreen = React.createClass({

    persons : [
        {title: '长途', face: require('../../asset/image/01.png'), date: '2016.02.22', money: '332'},
        {title: '交通', face: require('../../asset/image/02.png'), date: '2016.02.23', money: '65'},
        {title: '住宿', face: require('../../asset/image/03.png'), date: '2016.02.24', money: '25'},
        {title: '餐饮', face: require('../../asset/image/04.png'), date: '2016.02.25', money: '125'},
        {title: '补助', face: require('../../asset/image/05.png'), date: '2016.02.26', money: '63'},
    ],

    renderPersonItem(person, i) {
        return <View key={i} detail={person} style={styles.person}>
            <Text>{person.title}</Text>
        </View>;
    },

    render() {
        const {
            navigate
        } = this.props.navigation;

        return (
            <View style={{backgroundColor:'#ffffff',}}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.persons.map((person,i)=>this.renderPersonItem(person,i))
                    }
                </ScrollView>
            </View>
        );
    },
});

const PersonNavigator = StackNavigator(
    {
        personScreen: { screen: PersonScreen },
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: '#333333', },
            headerBackTitle: null,
            headerTintColor: '#FFFFFF',
            title: '好友',
            showIcon: true,
            headerRight: <View style={{marginRight:20}}>
                <Icon name='md-person-add' size={20} color='#ffffff' />
            </View>
        },
    }
);

let FriendScene = React.createClass({

    render() {
        StatusBar.setBarStyle('light-content');
        // StatusBar.setBackgroundColor('#333333');

        return (
            <View style={styles.container}>
                <PersonNavigator initialRoute={{statusBarHidden: false}}/>
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
    person: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 1,
        backgroundColor: '#EEEEEE',
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    }
});

module.exports = FriendScene;