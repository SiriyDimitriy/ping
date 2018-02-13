import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';
import {withRouter} from "react-router";

@withRouter
class VideoPage extends React.Component {

    render() {
        return <div className='videos_page'>
            <BreadCrumbs items={[{name: 'Вася', path: '/profile'}, {name: 'Прямі трансляції', path: '/videos'}, {name: 'Video name'}]}/>
            {this.props.match.params.id}
        </div>
    }
}

export default VideoPage;
