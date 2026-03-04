import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-sm">
            <h1 className="font-bold text-xl text-black">CS — Ticket System</h1>

            <div className="flex items-center gap-6">
                <ul className="hidden md:flex gap-6 text-gray-600">
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <button className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                    + New Ticket
                </button>

                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;