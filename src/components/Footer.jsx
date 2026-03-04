import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 mt-20">
            <div className="w-11/12 mx-auto py-14 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm leading-relaxed">
                        CS — Ticket System helps support teams efficiently manage customer
                        requests, track issue progress, and resolve tickets faster with
                        organized workflow management.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaSquareXTwitter /></span> <span>@CS — Ticket System</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaLinkedin /></span> <span>@CS — Ticket System</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaFacebookSquare /></span> <span>@CS — Ticket System</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><TbMailFilled /></span> <span>support@cst.com</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="border-t border-gray-700">
                <p className="text-center text-sm py-6 text-gray-400">
                    © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;