/**
 * Created by Anna on 2/12/2018.
 */
import React from 'react';
import Avatar from './Avatar';
import ActionButton from './ActionButton';

class Party extends React.Component {

    render() {
        return <div className='party'>
            <img className='party_img' src='/src/assets/png/ava-example.png'></img>
            <div className='party_text'>
                <div>Блок зеленої змії</div>
                <div>Консервативний пофігізм</div>
            </div>
            <ActionButton type='primary' text='Перейти'/>
        </div>
    }
}

export default Party;
