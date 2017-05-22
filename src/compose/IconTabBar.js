const React = require('react');
const ReactNative = require('react-native');
const {
    StyleSheet,
    Text,
    View,
    Animated,
} = ReactNative;

import Button from 'react-native-scrollable-tab-view/Button';

import Icon from 'react-native-vector-icons/Ionicons';

const IconTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        underlineColor: React.PropTypes.string,
        underlineHeight: React.PropTypes.number,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
        renderTabName: React.PropTypes.func,
        tabIcons: React.PropTypes.array,
    },

    getDefaultProps() {
        return {
            activeTextColor: '#6B8E23' ,
            inactiveTextColor: '#ADADAD',
            backgroundColor: null,
            renderTabName: this.renderTabName,
            tabIcons: ['ios-game-controller-b', 'ios-people', 'ios-color-filter', 'ios-contact'],
        };
    },

    renderTabOption(name, page) {
        const isTabActive = this.props.activeTab === page;

        return <Button
            style={{flex: 1, }}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => this.props.goToPage(page)}
        >
            {this.renderTabName(name, page, isTabActive)}
        </Button>;
    },

    renderTabName(name, page, isTabActive) {
        const { activeTextColor, inactiveTextColor, textStyle, tabIcons, } = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        const iconName = tabIcons[page];

        return <View style={[styles.tab, this.props.tabStyle, ]}>
            <Icon
                name={iconName}
                size={30}
                color={textColor}/>
        </View>;
    },

    render() {
        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
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
});

module.exports = IconTabBar;
