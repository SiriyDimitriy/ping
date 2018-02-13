import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";
import Header from './fragments/Header';
import NavMenu from './fragments/NavMenu';
import {Route, Switch} from 'react-router-dom';
import SettingsPage from '../pages/SettingsPage';
import ErrorPage from "../pages/error";
import ProfilePage from '../pages/ProfilePage';
import RatingPage from '../pages/RatingPage';
import VideosPage from '../pages/VideosPage';
import VideoPage from '../pages/VideoPage';
import PartiesPage from '../pages/PartiesPage';


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
                <Switch>
                    <Route exact path='/' component={SettingsPage}></Route>
                    <Route exact path='/settings' component={SettingsPage}></Route>
                    <Route exact path='/profile' component={ProfilePage}></Route>
                    <Route exact path='/rating' component={RatingPage}></Route>
                    <Route exact path='/rating/parties/:id' component={PartiesPage}></Route>
                    <Route exact path='/videos' component={VideosPage}></Route>
                    <Route exact path='/videos/:id' component={VideoPage}></Route>
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
        </React.Fragment>
    }
}

export default Sample;