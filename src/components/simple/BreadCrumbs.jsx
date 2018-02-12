import React from 'react';
import {Link} from 'react-router-dom';
import RightArrowIcon from '../../assets/svg/right-arrow.svg';

class BreadCrumbs extends React.Component {

    render() {
        if(!this.props.items || !this.props.items.length) {
            return null;
        }
        return <div className='breadcrumbs'>
            {this.props.items.map((item, key) => {
                if (key == this.props.items.length - 1) {
                    return <div key={key} className='breadcrumbs_name'>{item.name}</div>
                }
                return <React.Fragment key={key}>
                    <Link className='breadcrumbs_name breadcrumbs_name_link' to={item.path}>{item.name}</Link>
                    <RightArrowIcon className='breadcrumbs_arrow_icon'/>
                </React.Fragment>
            })}
        </div>
    }
}

export default BreadCrumbs;
