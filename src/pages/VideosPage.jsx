import React from 'react';
import BreadCrumbs from '../components/simple/BreadCrumbs';
import BlockHeader from '../components/simple/BlockHeader';
import {Link} from "react-router-dom";

class VideosPage extends React.Component {

    render() {
        const videoId = 'KAuhQCkyevs'

        return <div className='videos_page'>
            <BreadCrumbs items={[{name: 'Вася', path: '/profile'}, {name: 'Прямі трансляції'}]}/>
            <BlockHeader text='Прямі трансляції'/>
            <div className='videos_page_list flex-row'>
                {[1, 2, 3].map(el => <Link to={`/videos/${videoId}`} className='videos_page_list_item' key={el}>
                        <img src={`https://img.youtube.com/vi/${videoId}/1.jpg`}
                             alt="img"
                             className='videos_page_list_item_background'
                        />
                        <div className='videos_page_list_item_name flex-col'>Video name</div>
                    </Link>
                )}

            </div>
            <BlockHeader text='Запис за 21.07.2017'/>
            <div className='videos_page_list flex-row'>
                {[1, 2, 3].map(el => <div className='videos_page_list_item' key={el}>
                        <img src={`https://img.youtube.com/vi/${videoId}/1.jpg`}
                             alt="img"
                             className='videos_page_list_item_background'
                        />
                        <div className='videos_page_list_item_name flex-col'>Video name</div>
                    </div>
                )}

            </div>
            <div className='show_whole'>Показати повністю</div>
        </div>
    }
}

export default VideosPage;
