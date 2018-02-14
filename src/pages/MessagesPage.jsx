import React from 'react';
import Search from '../components/simple/Search';
import Collocutor from '../components/simple/Collocutor';

class MessagesPage extends React.Component {

    render() {
        return <div className='messages_page'>
            <div className='messages_page_users'>
                <Search/>
                <Collocutor/>
                <Collocutor/>

                <Collocutor/>

                <Collocutor/>

            </div>
            <div className='messages_page_messages'>messages</div>
            <div className='messages_page_footer1'>footer</div>
            <div className='messages_page_footer2'>footer</div>
        </div>
    }
}

export default MessagesPage;