import React, { Component, } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
} from 'react-native';

class WereWolfScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Were Wolf Online',
    });

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.gameBanner}>
                </View>
                <View style={styles.gameDesktop}>
                    <View style={styles.desktopLeft}>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                    </View>
                    <View style={styles.gameCenter}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.desktopRight}>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                        <View style={styles.gameSeat}>
                        </View>
                    </View>
                </View>

                <View style={styles.gameInput}>
                    <Text>按住说话</Text>
                </View>
            </View>
        );
    };
};

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#EEEEEE',
    },
    gameBanner:{
        height: 60,
        backgroundColor: '#EEEEEE',
    },
    gameDesktop:{
        flexDirection: 'row',
        height:430,
    },
    desktopLeft: {
        flexDirection: 'column',
        width:70,
        backgroundColor: '#AAAAAA',
    },
    gameCenter: {
        flexDirection: 'column',
        flex:1,
        backgroundColor: '#FF6600',
    },
    desktopRight: {
        flexDirection: 'column',
        width:70,
        backgroundColor: '#AAAAAA',
    },
    gameSeat: {
        width:60,
        height:60,
        margin:5,
        backgroundColor:'#FFFFFF',
    },
    gameInput: {
        flexDirection: 'row',
        height:40,
        marginTop:30,
        backgroundColor:'#FFFFFF',
    }
});

module.exports = WereWolfScreen;