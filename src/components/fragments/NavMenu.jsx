import React from 'react';
import NavMenuItem from '../simple/NavMenuItem';

class NavMenu extends React.Component {

    render() {
        return <div className='nav_menu'>
            <NavMenuItem to='/s' text='Профіль' icon='i'/>
            <NavMenuItem to='/f' text='Повідомлення' icon='i'/>
            <NavMenuItem to='/ff' text='Рейтинг' icon='i'/>
            <NavMenuItem to='/fff' text='Прямі трансляції' icon='i'/>
            <NavMenuItem to='/ffff' text='Налаштування' icon='i'/>
            <NavMenuItem to='/fffff' text='Вихід' icon='i'/>
        </div>
    }
}

export default NavMenu;