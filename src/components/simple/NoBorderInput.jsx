import React from 'react';

class NoBorderInput extends React.Component {

    render() {
        return <input className='noborder_input' placeholder={this.props.placeholder}/>
    }
}

export default NoBorderInput;