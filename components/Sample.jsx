import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';

@withRouter
@connect(store => ({}), {

})
class Sample extends React.Component {

    render() {
        return <React.Fragment>
            Hello, world!
            <div className='sample'>sample</div>
        </React.Fragment>
    }
}

export default Sample;