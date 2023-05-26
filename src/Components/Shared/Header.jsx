import React, { useContext, useState } from 'react';
import logo from '../../assets/logo/Anik Barua.png'
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';


const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='flex items-center justify-between shadow-md fixed top-0 right-0 left-0 h-20 md:px-20 z-20'>
            <div>
                <Link to={'/'}>
                    <img className='w-28 h-20' src={logo} alt="website nav logo" />
                </Link>
            </div>

            <ul className={`flex items-center flex-col absolute duration-700 w-full shadow-md md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>
                <li className='mr-5'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'true' : 'false'}>Resume</NavLink>
                </li>

                <li className='mr-5'>
                    <NavLink to={'project'} className={({ isActive }) => isActive ? 'true' : 'false'}>Projects</NavLink>
                </li>
                {
                    <li className='mr-5'>
                        <NavLink to={'contact'} className={({ isActive }) => isActive ? 'true' : 'false'}>Contact</NavLink>
                    </li>
                }
            </ul>
            <div className='md:hidden'
                onClick={() => setShow(!show)}>

                <Hamburger
                    color='white'
                    toggled={isOpen} toggle={setOpen} />
            </div>
        </div >
    );
};

export default Header;