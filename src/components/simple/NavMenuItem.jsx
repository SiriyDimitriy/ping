import React from 'react';
import {NavLink} from 'react-router-dom';

class NavMenuItem extends React.Component {

    render() {
        return <NavLink className={`nav_menu_item ${this.props.className ? this.props.className : ''}`}
                        to={this.props.to}>
            <this.props.icon className='nav_menu_item_icon'/>
            <div className='nav_menu_item_text'>{this.props.text}</div>
        </NavLink>
    }
}

export default NavMenuItem;