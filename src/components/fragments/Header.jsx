import React from 'react';
import Bell from '../simple/Bell';
import Search from '../simple/Search';
import LogoIcon from '../../assets/svg/small_logo_icon.svg';
import Avatar from '../simple/Avatar';

class Header extends React.Component {

    render() {
        return <div className='ping_header'>
                <LogoIcon className='ping_header_logo_icon'/>
                <Search/>
                <div className='ping_header_main'>
                    <Bell count={13}/>
                    <Avatar name='Вася' path='/login' src='/src/assets/png/ava-example.png'/>
                </div>
            </div>

    }
}

export default Header;