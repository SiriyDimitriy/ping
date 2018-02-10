import React from 'react';
import BellIcon from '../../../assets/svg/bell.svg';

class Bell extends React.Component {

    render() {
        return <div className='bell' onClick={this.props.onClick}>
            <BellIcon className='bell_icon'/>
            {this.props.count && this.props.count > 0  &&
                <div className='bell_counter'>{this.props.count}</div>}
        </div>

    }
}

export default Bell;