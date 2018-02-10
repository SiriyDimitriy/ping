import React from 'react';
import Bell from '../simple/Bell';
import Search from '../simple/Search';

class Header extends React.Component {

    render() {
        return <div className='ping_header'>
                <div className='ping_header_logo'>logo</div>
                <Search/>
                <div className='ping_header_main'>
                    <Bell count={13}/>
                    <div className='ping_header_avatar'>Вася ava</div>
                </div>
            </div>

    }
}

export default Header;