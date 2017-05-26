import React, { Component, } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
    StackNavigator,
} from 'react-navigation';

class NoticeScene extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Message',
    });

    notices = [
        {title: '长途', face: require('../../asset/image/01.png'), date: '2016.02.22', money: '332'},
        {title: '交通', face: require('../../asset/image/02.png'), date: '2016.02.23', money: '65'},
        {title: '住宿', face: require('../../asset/image/03.png'), date: '2016.02.24', money: '25'},
        {title: '餐饮', face: require('../../asset/image/04.png'), date: '2016.02.25', money: '125'},
        {title: '补助', face: require('../../asset/image/05.png'), date: '2016.02.26', money: '63'},
    ];

    renderNoticeItem(notices, i) {
        return <View key={i} detail={notices} style={styles.notice}>
            <Image style={styles.notice} source={notices.face}/>
            <Text>{notices.title}</Text>
        </View>;
    };

    render() {
        const {
            navigate
        } = this.props.navigation;

        return (
            <View style={{backgroundColor:'#ffffff',}}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        this.notices.map((notices,i)=>this.renderNoticeItem(notices,i))
                    }
                </ScrollView>
            </View>
        );
    };
};



let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    notice: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 5,
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

module.exports = NoticeScene;