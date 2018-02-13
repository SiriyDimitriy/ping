import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';

class VideoPage extends React.Component {

    render() {
        return <div className='video_page'>
            <BreadCrumbs items={[{name: 'Вася', path:'/profile'}, {name: 'Прямі трансляції'}]}/>
            <BlockHeader text='Прямі трансляції'/>
            <div className='show_whole'>Показати повністю</div>
        </div>
    }
}

export default VideoPage;
