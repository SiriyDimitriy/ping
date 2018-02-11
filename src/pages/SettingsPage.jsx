import React from 'react';
import ActionButton from '../components/simple/ActionButton';
import RightArrowIcon from '../assets/svg/right-arrow.svg';
import NoBorderInput from '../components/simple/NoBorderInput';
import Dialog from '../components/simple/Dialog';

class SettingsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dialogOpen: false
        }
    }

    render() {
        return <div className='settings_page'>
            <div className='settings_page_header'>
                <div className='settings_page_header_name'>Вася</div>
                <RightArrowIcon className='settings_page_header_arrow_icon'/>
                <div>Налаштування</div>
            </div>
            <div className='settings_page_caption'>
                <h2 className='settings_page_caption_name'>Налаштування</h2>
                <div className='settings_page_caption_line'></div>
            </div>
            <div className='settings_page_form'>
                    <h3>Основна інформація</h3>
                    <h3>Безпека</h3>
                    <NoBorderInput placeholder='ПІБ'/>
                    <NoBorderInput placeholder='Старий пароль'/>
                    <NoBorderInput placeholder='Місто'/>
                    <NoBorderInput placeholder='Новий пароль'/>
                    <NoBorderInput placeholder='Школа'/>
                    <NoBorderInput placeholder='Підтвердження паролю'/>
                    <NoBorderInput placeholder='Університет'/>
                    <ActionButton text='Змінити' type='primary'/>
                    <h3 className='settings_page_form_about'>Про себе</h3>
                    <div></div>
                    <NoBorderInput placeholder='Про себе'/>
                    <div>Ви є публічною особою?</div>
                    <ActionButton text='Зберегти' type='primary'/>
                    <ActionButton text='Пройти верифікацію' type='primary' onClick={() => this.setState({dialogOpen: true})}/>
            </div>
            {this.state.dialogOpen && <Dialog close={() => this.setState({dialogOpen: false})}/>}

        </div>
    }
}

export default SettingsPage;