import React from 'react';

class ActionButton extends React.Component {

    render() {
        let className = 'ping_button ';
        if (this.props.type) {
            className+=`ping_button--${this.props.type}`;
        }
        return <button className={className}>{this.props.text}</button>;
    }
}

export default ActionButton;