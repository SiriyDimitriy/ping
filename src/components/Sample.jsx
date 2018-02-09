import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    };
}

//@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Sample extends React.Component {

    render() {
        console.log('ssssssssssss', this.props)
        return <React.Fragment>
            Hello, world!
            <div className='sample'>sample</div>
            <div>User name: {this.props.user.name}</div>
            <button onClick={this.props.login}>register</button>
        </React.Fragment>
    }
}

export default Sample;