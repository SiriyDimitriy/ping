import React from 'react';
import ActionButton from './ActionButton';
import {withRouter} from "react-router";

@withRouter
class Party extends React.Component {

    render() {
        let buttonProps = {
            type: 'primary',
            text: this.props.buttonText
        };
        if (this.props.path) {
            buttonProps.path = this.props.path;
        }
        if (this.props.onClick) {
            buttonProps.onClick = this.props.onClick;
        }
        return <div className='party'>
            <div className='party_content'>
                <img className='party_content_img' src={this.props.src}/>
                <div className='party_content_text'>
                    <div className='party_content_text_name'>{this.props.name}</div>
                    <div className='party_content_text_description'>{this.props.description}</div>
                </div>
            </div>
            <ActionButton {...buttonProps}/>
        </div>
    }
}

export default Party;
