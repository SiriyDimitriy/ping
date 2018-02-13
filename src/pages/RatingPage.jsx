import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';
import Party from '../components/simple/Party';

class RatingPage extends React.Component {

    render() {
        const party = {
            name: 'Блок зеленої змії',
            description: 'Консервативний пофігізм',
            src: '/src/assets/png/ava-example.png',
            buttonText: 'Перейти',
            path: '/rating/parties/zz'
        }
        return <div className='rating_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Партії'}]}/>
            <BlockHeader text='Список партій'/>
            <div className='rating_page_parties'>
                <Party {...party}/>
                <Party {...party}/>
                <Party {...party}/>
                <Party {...party}/>
            </div>
            <div className='show_whole'>Показати повністю</div>
        </div>
    }
}

export default RatingPage;
