import {Link} from 'react-router-dom'
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='Navbar'>
                <h1>Convey</h1>
                <div className='Links'>
                        <li className='lin'>
                            <Link to = '/'>
                                Home
                            </Link>
                        </li>
                        <li className='lin'>
                            <Link to = '/about'>
                                About
                            </Link>
                        </li>
                        <li className='lin'>
                            <Link to = '/contact'>
                                Contact
                            </Link>
                        </li>
                        <li className='lin'>
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
