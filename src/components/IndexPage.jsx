import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";
import Header from './fragments/Header';
import NavMenu from './fragments/NavMenu';
import SettingsPage from './pages/SettingsPage';

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

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Sample extends React.Component {

    render() {
        console.log('ssssssssssss', this.props)
        return <React.Fragment>
            <Header/>
            <div className='ping_page'>
                <NavMenu/>
                <SettingsPage/>
                {/*Hello, world!*/}
                {/*<div className='sample'>sample</div>*/}
                {/*<div>User name: {this.props.user.name}</div>*/}
                {/*<button onClick={this.props.login}>register</button>*/}
            </div>
        </React.Fragment>
    }
}

export default Sample;