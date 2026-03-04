import React from 'react';
import vectorImg from '../assets/vector1.png';

const Banner = ({inProgress, resolved}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-8 text-center">

            <div className="relative overflow-hidden rounded-xl h-32 md:h-36 lg:h-64 text-white 
        bg-linear-to-l from-purple-500 to-indigo-500 flex flex-col items-center justify-center">
                <div
                    className="absolute inset-y-0 left-0 w-44 lg:w-80 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url(${vectorImg})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'left center',
                    }}
                ></div>

                <div
                    className="absolute inset-y-0 right-0 w-44 lg:w-80 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url(${vectorImg})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'right center',
                        transform: 'rotateY(180deg)',
                    }}
                ></div>
                <h2 className="text-xl font-semibold mb-4">In-Progress</h2>
                <p className="text-5xl font-bold">{inProgress.length}</p>
            </div>

            <div className="relative overflow-hidden rounded-xl h-32 md:h-36 lg:h-64 text-white 
        bg-linear-to-r from-green-500 to-teal-600 flex flex-col items-center justify-center">
                <div
                    className="absolute inset-y-0 left-0 w-44 lg:w-80 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url(${vectorImg})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'left center',
                    }}
                ></div>

                <div
                    className="absolute inset-y-0 right-0 w-44 lg:w-80 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url(${vectorImg})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'right center',
                        transform: 'rotateY(180deg)',
                    }}
                ></div>
                <h2 className="text-xl font-semibold mb-4">Resolved</h2>
                <p className="text-5xl font-bold">{resolved.length}</p>
            </div>
        </div>
    );
};

export default Banner;