
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    ToastAndroid,
} from 'react-native';


var friends = [
    {title:'长途',face:require('../asset/01.png'),date:'2016.02.22',money:'332'},
    {title:'交通',face:require('../asset/02.png'),date:'2016.02.23',money:'65'},
    {title:'住宿',face:require('../asset/03.png'),date:'2016.02.24',money:'25'},
    {title:'餐饮',face:require('../asset/04.png'),date:'2016.02.25',money:'125'},
    {title:'补助',face:require('../asset/05.png'),date:'2016.02.26',money:'63'},
];

let FriendScene = React.createClass({

    renderFriendItem(item , i) {
        return <View key={i} detail={item} style={styles.friend}>
            <Image style={styles.face} source={item.face} />
            <Text style={styles.text}>{item.title}</Text>
        </View>;
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        friends.map((item,i)=>this.renderFriendItem(item,i))
                    }
                </ScrollView>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop:20,
    },
    friend: {
        height:100,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    face: {
        width:80,
        height:80,
        left:10,
        top:20,
        position:'absolute'
    },
    text: {
        flex:1,
        left:100,
        top:20,
        fontWeight:'200',
        color:'#aaaaaa',
        position:'absolute'
    }
});

module.exports = FriendScene;