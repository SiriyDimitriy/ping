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
        return <div className='rating_page party_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Партії', path: '/rating'}, {name: 'ЗеленаЗмія'}]}/>
            <BlockHeader text='Список партій'/>
            <div className='party_description'>
                <img className='party_description_image' src='/src/assets/png/ava-example.png'/>
                <div className='party_description_content'>
                    <h1>Партія Зеленої Змії</h1>
                    <div className='party_description_content_text'>Партія бореться за світову виключну роль змій у сучасному політичному та економічному житті.
                    Виступає за підвищення кількості кролів та мишей а також за глобальне потеплення.</div>
                </div>
            </div>
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

export default PartiesPage;
