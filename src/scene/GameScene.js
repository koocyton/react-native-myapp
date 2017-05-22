
import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    ToastAndroid,
} from 'react-native';

import GameItem from '../compose/GameItem';

var details = [
    {title:'长途',icon:require('../asset/01.png'),date:'2016.02.22',money:'332'},
    {title:'交通',icon:require('../asset/02.png'),date:'2016.02.23',money:'65'},
    {title:'住宿',icon:require('../asset/03.png'),date:'2016.02.24',money:'25'},
    {title:'餐饮',icon:require('../asset/04.png'),date:'2016.02.25',money:'125'},
    {title:'补助',icon:require('../asset/05.png'),date:'2016.02.26',money:'63'},
];

let GameScene = React.createClass({

    renderExpenseItem(item , i) {
        return <GameItem key={i} detail={item} onClick={()=>this.onClick(i)} onDelete={()=>this.onDelete(i)}/>;
    },

    //修改消费明细
    onClick(i){
        this.toastMessage("onClick : "+i);
    },

    //删除单条消费记录
    onDelete(i) {
        this.toastMessage("onDelete : "+i);
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardDismissMode={'on-drag'}>
                    {
                        details.map((item,i)=>this.renderExpenseItem(item,i))
                    }
                </ScrollView>
            </View>
        );
    },

    toastMessage(alertMessage){
        ToastAndroid.show(alertMessage,ToastAndroid.SHORT);
    }
});


var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        marginTop:20,
        backgroundColor:'#FFFFFF',
    }
});

module.exports = GameScene;