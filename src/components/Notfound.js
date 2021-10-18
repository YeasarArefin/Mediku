import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {

    return (

        <>

            <div className="container">

                <div className="flex flex-col">

                    <div className="w-3/6 mt-32 mx-auto">
                        <img src="https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png" alt="404" />
                    </div>

                    <Link to="/" className="text-center">
                        <button className="py-2 w-40 mx-auto bg-indigo-700 rounded-full focus:ring-4 focus:ring-indigo-400 transition duration-500 text-white">
                            Go Home
                        </button>
                    </Link>

                </div>

            </div>

        </>

    );

};

export default Notfound;
