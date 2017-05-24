const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    View,
} = ReactNative;

import Button from 'react-native-scrollable-tab-view/Button';

import Icon from 'react-native-vector-icons/Ionicons';

const IconTabBar = React.createClass({

    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        borderColor: React.PropTypes.string,
        backgroundColor: React.PropTypes.string,
        activeColor: React.PropTypes.string,
        inactiveColor: React.PropTypes.string,
        tabIcons: React.PropTypes.array,
        iconSize: React.PropTypes.number,
    },

    getDefaultProps() {
        return {
            activeColor: '#6B8E23' ,
            inactiveColor: '#ADADAD',
            backgroundColor: '#FFFFFF',
            borderColor: '#666666',
            tabIcons: [],
            iconSize: 30,
        };
    },

    renderTabOption(tabIcon, page) {
        const isTabActive = this.props.activeTab === page;

        return <Button
            style={{flex: 1, }}
            key={tabIcon.name}
            accessible={true}
            accessibilityLabel={tabIcon.name}
            accessibilityTraits='button'
            onPress={() => this.props.goToPage(page)}
        >
            {this.renderTabName(tabIcon, page, isTabActive)}
        </Button>;
    },

    renderTabName(tabIcon, page, isTabActive) {
        const { activeColor, inactiveColor, } = this.props;
        const textColor = isTabActive ? activeColor : inactiveColor;
        const icon = isTabActive ? tabIcon.activeIcon : tabIcon.inactiveIcon;

        return <View style={[styles.tab, this.props.tabStyle, ]}>
            <Icon
                name={icon}
                size={this.props.iconSize}
                color={textColor}/>
        </View>;
    },

    render() {
        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
                {
                    this.props.tabIcons.map((tabIcon, i) => this.renderTabOption(tabIcon, i))
                }
                <View style={[styles.border, {backgroundColor: this.props.borderColor, }]} />
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#ccc',
    },
    border:{
        flex: 1,
        height:1,
        bottom:48,
        left:0,
        right:0,
        position: 'absolute'
    }
});

module.exports = IconTabBar;
