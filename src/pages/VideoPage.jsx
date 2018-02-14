import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import {withRouter} from "react-router";
import YoutubePlayer from "../components/simple/YoutubePlayer";

@withRouter
class VideoPage extends React.Component {

    render() {
        return <div className='videos_page'>
            <BreadCrumbs items={[{name: 'Вася', path: '/profile'}, {name: 'Прямі трансляції', path: '/videos'}, {name: 'Video name'}]}/>
            <YoutubePlayer video={this.props.match.params.id} />
        </div>
    }
}

export default VideoPage;
