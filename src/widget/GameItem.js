const React = require('react');

import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

const GameItem = React.createClass({
    render(){
        return(
            <View style={{backgroundColor:'#F8F8F8'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>this.onClick()}>
                    <View style={styles.container}>
                        <View style={styles.left}>
                            <Image style={styles.icon} source={this.props.detail.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    },

    onClick(){
        this.props.onClick();
    },

    delete(){
        this.props.onDelete();
    }
});

let styles = StyleSheet.create({
    container:{
        flex:1,
        height:260,
        //borderColor:'#E2E9EB',
        //borderWidth:1,
        //borderRadius:0.5,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#FFFFFF',
        flexDirection:'row'
    },
    /*
    close:{
        width:22,
        height:22,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
        flex:1,
        bottom:55,
        left:2,
        right:0,
        position: 'absolute'
    },
    */
    icon:{
        flex:1,
        height:100,
        width:420
    },
    left:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = GameItem;