import React from 'react';
import SearchIcon from '../../assets/svg/search.svg';

class Search extends React.Component {

    onEnter(e) {
        if (e.key == "Enter") {
            if(e.target.value && this.props.search) {
                this.props.search(e.target.value);
            }
        }
    }

    render() {
        return <div className='search'>
                <input placeholder='Пошук'
                       className='search_input'
                       defaultValue=''
                       onKeyPress={(e) => this.onEnter(e)}/>
            <div className='search_magnifier'><SearchIcon className='search_magnifier_icon'/></div>
            </div>
    }
}

export default Search;