import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';
import Party from '../components/simple/Party';
import RatingStars from '../components/simple/RatingStars';

class PartiesPage extends React.Component {

    render() {
        const party = {
            name: 'Зелена змія',
            description: <div><RatingStars/>Партія: {this.props.match.params.id}</div>,
            src: '/src/assets/png/ava-example.png',
            buttonText: 'Написати повідомлення'
        }
        return <div className='rating_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Партії', path: '/rating'}, {name: 'ЗеленаЗмія'}]}/>
            <BlockHeader text='Список партій'/>
            <div className='rating_page_parties'>
                <Party {...party}/>
                <Party {...party}/>
                <Party {...party}/>
                <Party {...party}/>
            </div>
            <div className='rating_page_show_whole'>Показати повністю</div>
        </div>
    }
}

export default PartiesPage;
