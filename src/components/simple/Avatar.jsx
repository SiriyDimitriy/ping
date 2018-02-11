import React from 'react';
import Bell from '../simple/Bell';
import Search from '../simple/Search';
import LogoIcon from '../../assets/svg/small_logo_icon.svg';
import {Link} from 'react-router-dom';

class Avatar extends React.Component {

    render() {
        return <Link className='avatar' to={this.props.path}>
            <div className='avatar_name'>{this.props.name}</div>
            <img className='avatar_img' src={this.props.src}/>
        </Link>

    }
}

export default Avatar;
