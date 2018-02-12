import React from 'react';
import ActionButton from '../components/simple/ActionButton';
import NoBorderInput from '../components/simple/NoBorderInput';
import Dialog from '../components/simple/Dialog';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';

class SettingsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dialogOpen: false
        }
    }

    render() {
        return <div className='settings_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Налаштування'}]}/>
            <BlockHeader text='Налаштування'/>
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