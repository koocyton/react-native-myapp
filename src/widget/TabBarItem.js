
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class TabBarItem extends Component {
    render() {
        let iconName  = this.props.focused ? this.props.activeIcon : this.props.inactiveIcon;
        let iconColor = this.props.tintColor;
        return (
            <Icon name={iconName} size={30} color={iconColor} />
        );
    }
}

export default TabBarItem;