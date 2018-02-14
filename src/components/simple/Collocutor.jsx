import React from 'react';
import Avatar from './Avatar';

class UserMessageItem extends React.Component {

    render() {
        return <div className='collocutor'>
            <Avatar src='/src/assets/png/ava-example.png' path='/profile'/>
            <div className='collocutor_info'>
                <div className='collocutor_info_dot'></div>
                <div className='collocutor_info_text'>
                    <div className='collocutor_info_text_person'>
                        <div className='collocutor_info_text_person_name'>Вася</div>
                        <div className='collocutor_info_text_person_date'>24.56.8937</div></div>
                    <div className='collocutor_info_text_message'>Ви: це було написано для Васі з метою покращення стосунків між Васею та іншими членами екіпажу</div>
                    <div className='elipsis'>...</div>
                    <div className='collocutor_info_text_question'>Питання закрите</div>
                </div>
            </div>
        </div>
    }
}

export default UserMessageItem;