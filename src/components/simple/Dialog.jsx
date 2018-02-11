import React from 'react';
import ActionButton from '../simple/ActionButton';
import NoBorderInput from '../simple/NoBorderInput';
import CrossIcon from '../../assets/svg/cross.svg';

class Dialog extends React.Component {

    render() {
        return <div className='dialog'>
            <div className='dialog_container'>
                <div className='dialog_container_border'>
                    <h3>Верифікація</h3>
                    <NoBorderInput placeholder='Місто'/>
                    <NoBorderInput placeholder='Школа'/>
                    <NoBorderInput placeholder='+38'/>
                    <NoBorderInput placeholder='Університет'/>
                    <ActionButton text='Подати заяву' type='primary'/>

                </div>
                <div className='dialog_close' onClick={this.props.close}>
                    <CrossIcon className='dialog_close_icon'/>
                </div>
            </div>
        </div>
    }
}

export default Dialog;