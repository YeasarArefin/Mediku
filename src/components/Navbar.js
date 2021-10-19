import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { FaStethoscope } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import useAuth from '../hooks/useAuth';

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    const [show, setShow] = useState(true);
    const { user, logOut } = useAuth();

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'About', to: '/about' },
        { id: 4, text: 'Contact', to: '/contact' },
    ];

    const showNav = () => {

        if (window.scrollY > 150) {
            setShow(false);
        } else {
            setShow(true);
        }

    };

    useEffect(() => {

        window.addEventListener('scroll', showNav);
        return () => {
            window.removeEventListener('scroll', showNav);
        };

    }, []);

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav);
    };

    return (

        <header className={`fixed top-0 w-full z-10 transition duration-150 pb-5 md:pb-0 ${show ? "bg-white shadow-lg" : "bg-indigo-700 shadow-xl"}`}>
            {/* desktop nav  */}
            <nav className="container flex items-center px-12 py-3">
                {/* brand  */}
                <Link to="/home" className="flex items-center space-x-1 flex-grow">
                    <h1 className={`text-3xl font-extrabold transition duration-150 ${show ? "text-indigo-700 " : "text-white"} flex items-center gap-x-3`} ><FaStethoscope /> Mediku</h1>
                </Link>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-10">
                    <ul className="flex items-center space-x-10">
                        {menu.map(item => (
                            <li key={item.id}>
                                <NavLink exact activeStyle={{
                                    fontWeight: "bold",
                                    borderBottom: "2px solid skyblue"
                                }} to={item.to} className={` transition duration-150 ${show ? "text-gray-600 text-lg" : "text-white"}`}>{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>


                    {

                        user.email ? (

                            <div className="flex items-center gap-x-3">

                                <img width="40px" className="rounded-full" src={user.photoURL} alt="user" />

                                <h1 className={`${show ? "text-gray-900" : "text-white"} text-xl font-semibold`}>{user.displayName}</h1>

                                <button onClick={logOut} className={`flex items-center gap-x-2 transition duration-150 ${show ? "bg-indigo-700 text-white" : "bg-white text-gray-900"} ring-blue-300 px-3 py-2  focus:ring-4 transition duration-150 rounded-lg`}><FiLogOut />Log Out</button>

                            </div>

                        ) : (

                            <>

                                <Link to="/login">

                                    <button className={`transition duration-150 ${!show && "bg-white text-gray-900"} ring-blue-300 px-3 py-2  focus:ring-4 transition duration-150 rounded-lg border border-gray-400`} >Login</button>

                                </Link>

                                <Link to="/Register">

                                    <button className={`transition duration-150 ${show ? "bg-indigo-700 text-white" : "bg-white text-gray-900"} ring-blue-300 px-3 py-2  focus:ring-4 transition duration-150 rounded-lg`} >Register</button>

                                </Link>



                            </>

                        )

                    }





                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className={`w-10 h-10 ring-blue-300 ${show ? "text-gray-700 border" : "text-white border"}  border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110`} onClick={handleClick} />
                </div>

            </nav>

            {/* mobile nav  */}
            {mobileNav && (

                <>
                    <nav className={`${show ? "bg-white" : "bg-indigo-600"} shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden`}>
                        <ul>
                            {menu.map(item => (
                                <a key={item.id} href={item.to} className={`${show ? "text-gray-600 " : "text-white"} text-lg`}>
                                    <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-150 cursor-default">
                                        {item.text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {/* button  */}
                        <div className="px-3 py-2">
                            <Link to="/login">
                                <button className={`transition duration-150 ${show ? "bg-blue-700" : "bg-white text-gray-900 font-semibold"} ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-150 rounded-lg w-full`}>Login</button>
                            </Link>
                        </div>
                    </nav>
                </>
            )}

        </header>

    );

};

export default Navbar;