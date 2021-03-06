import React from 'react';
import NavMenuItem from '../simple/NavMenuItem';
import ProfileIcon from '../../assets/svg/profile_icon.svg';
import MessageIcon from '../../assets/svg/messages_icon.svg';
import SettingsIcon from '../../assets/svg/settings_icon.svg';
import LogoutIcon from '../../assets/svg/logout_icon.svg';
import VideoIcon from '../../assets/svg/video_icon.svg';
import GraphIcon from '../../assets/svg/graph_icon.svg';

class NavMenu extends React.Component {

    render() {
        return <div className='nav_menu'>
            <NavMenuItem to='/profile' text='Профіль' icon={ProfileIcon}/>
            <NavMenuItem to='/messages' text='Повідомлення' icon={MessageIcon}/>
            <NavMenuItem to='/rating' text='Рейтинг' icon={GraphIcon}/>
            <NavMenuItem to='/videos' text='Прямі трансляції' icon={VideoIcon}/>
            <NavMenuItem to='/settings' text='Налаштування' icon={SettingsIcon}/>
            <NavMenuItem to='/login' text='Вихід' icon={LogoutIcon}/>
        </div>
    }
}

export default NavMenu;