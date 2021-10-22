import React from 'react';
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav'>
                <Link to='aboutcontent' smooth={true} duration={500}> <h4 className='navTitle'>About</h4> </Link>
                <h4 className='navTitle'>Experience</h4>
                <h4 className='navTitle'>Projects</h4>
                <h4 className='navTitle'>Contact</h4>
                <h4 className='navTitle'>Resume</h4>
            </div>
        </div>
    )
}

export default Navbar;