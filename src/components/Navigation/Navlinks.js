import React from 'react';
import {Link} from 'react-scroll'

const Navlinks = () => {
    return ( 
        <ul>
            <li>
                <Link to='aboutcontent' smooth={true} duration={500}> <h4 className='navTitle'>About</h4> </Link>
            </li>
            <li>
                <h4 className='navTitle'>Experience</h4>
            </li>
            <li>
                <h4 className='navTitle'>Projects</h4>
            </li>
            <li>
                <h4 className='navTitle'>Contact</h4>  
            </li>
            <li>
                 <h4 className='navTitle'>Resume</h4>
            </li>
        </ul>
     );
}
 
export default Navlinks;