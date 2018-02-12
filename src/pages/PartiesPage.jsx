import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';
import Party from '../components/simple/Party';

class PartiesPage extends React.Component {

    render() {
        return <div className='rating_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Партії', path: '/rating'}, {name: 'ЗеленаЗмія'}]}/>
            <BlockHeader text='Список партій'/>
            <div className='rating_page_parties'>
                <Party/>
                <Party/>
                <Party/>
                <Party/>
            </div>
            <div className='rating_page_show_whole'>Показати повністю</div>
        </div>
    }
}

export default PartiesPage;
