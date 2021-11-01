import React from 'react';
import {Link} from 'react-scroll'
import Navlinks from './Navlinks';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <div className='nav'>
                <Navlinks/>
            </div>
        </nav>
    )
}

export default Navigation;