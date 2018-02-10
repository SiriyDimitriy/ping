import React from 'react';
import {NavLink} from 'react-router-dom';

class NavMenuItem extends React.Component {

    render() {
        return <NavLink className={`nav_menu_item ${this.props.className ? this.props.className : ''}`}
                        to={this.props.to}>
            <div className='nav_menu_item_symbol'>{this.props.icon}</div>
            {this.props.text}
        </NavLink>
    }
}

export default NavMenuItem;