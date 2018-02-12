/**
 * Created by Anna on 2/12/2018.
 */
import React from 'react';
import Avatar from './Avatar';
import ActionButton from './ActionButton';

class Party extends React.Component {

    render() {
        return <div className='party'>
            <div className='party_content'>
                <img className='party_content_img' src='/src/assets/png/ava-example.png'></img>
                <div className='party_content_text'>
                    <div className='party_content_text_name'>Блок зеленої змії</div>
                    <div className='party_content_text_description'>Консервативний пофігізм</div>
                </div>
            </div>
            <ActionButton type='primary' text='Перейти'/>
        </div>
    }
}

export default Party;
