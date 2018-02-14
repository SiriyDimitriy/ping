import React from 'react';
import RatingStars from "../components/simple/RatingStars";
import ActionButton from "../components/simple/ActionButton";

class ProfilePage extends React.Component {

    render() {
        return <React.Fragment>
            <div className='profile_page profile_page_left'>
                <div className="profile_page_left_avatar_block flex-col">
                    <img src="/src/assets/avatar.jpg" alt="avatar" className='profile_page_left_avatar_block_image'/>
                    <div className="profile_page_left_avatar_block_rating_stars_wrapper flex-row">
                        <RatingStars/>
                    </div>
                </div>
                <ActionButton text='Написати повідомлення' type='primary'/>
            </div>
            <div className='profile_page profile_page_right'>
                Profile pagessss
            </div>
        </React.Fragment>
    }
}

export default ProfilePage;