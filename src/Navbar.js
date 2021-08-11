import {Link} from 'react-router-dom'
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='Navbar'>
                <h1>Convey</h1>
                <div className='Links'>
                        <li >
                            <Link to = '/'>
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link to = '/about'>
                                About
                            </Link>
                        </li>
                        <li >
                            <Link to = '/contact'>
                                Contact
                            </Link>
                        </li>
                        <li >
                            <Link to = '/help'>
                                Help   
                            </Link>
                        </li>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
