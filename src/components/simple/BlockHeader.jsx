import React from 'react';

class BlockHeader extends React.Component {

    render() {
        return <div className='block_header'>
            <h2 className='block_header_name'>{this.props.text}</h2>
            <div className='block_header_line'></div>
        </div>
    }
}

export default BlockHeader;
