import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className=" z-50 fixed backdrop-blur-xl w-full dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto px-14">
                <NavLink rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2 font-bold text-2xl" to="/">
                    <h1>Appna Shop</h1>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <NavLink className={({isActive}) =>`flex ${isActive ? 'text-yellow-300' : 'text-black'}`} to="/">
                        <a rel="noopener noreferrer" className="flex items-center px-4 -mb-1  dark:border-">Home</a>
                    </NavLink>
                    <NavLink className={({isActive}) =>`flex ${isActive ? 'text-yellow-300' : 'text-black'}`} to="/coffees">
                        <a rel="noopener noreferrer" className="flex items-center px-4 -mb-1  dark:border-">Coffees</a>
                    </NavLink>
                    <NavLink className={({isActive}) =>`flex ${isActive ? 'text-yellow-300' : 'text-black'}`} to="/dashboard">
                        <a rel="noopener noreferrer" className="flex items-center px-4 -mb-1  dark:border- dark:text-violet-600 dark:border-violet-600">
                            Dashboard</a>
                    </NavLink>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavBar;