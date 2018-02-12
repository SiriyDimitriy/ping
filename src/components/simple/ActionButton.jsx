import React from 'react';
import {Link} from 'react-router-dom';

class ActionButton extends React.Component {

    render() {
        let className = 'ping_button ';
        if (this.props.type) {
            className+=`ping_button--${this.props.type}`;
        }
        if (this.props.path) {
            return <Link className={className} to={this.props.path}>
                {this.props.text}
                </Link>
        }
        return <button className={className} onClick={this.props.onClick} type={this.props.actionType}>{this.props.text}</button>;
    }
}

export default ActionButton;