import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <>

            <div className="container">

                <div className="flex items-center h-screen">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                        <div className="flex flex-col gap-y-10">
                            <h1 className="text-5xl font-bold text-center lg:text-left">About Us</h1>
                            <p className="text-lg text-center lg:text-justify w-full lg:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam in eius, porro impedit quisquam architecto error velit minus, fugit sit accusamus! At iusto accusantium repellendus quod iure, eveniet placeat esse quibusdam hic nihil quos id assumenda distinctio in rerum. Facere provident placeat ad ipsum veniam minima doloribus quis et.</p>

                            <Link to="/">
                                <button className="px-5 w-44 py-4 bg-indigo-700 text-white outline-none focus:ring-4 focus:ring-indigo-300 transition duration-500 rounded-full flex items-center gap-x-2">< MdArrowBackIos />Back To Home</button>
                            </Link>

                        </div>

                        <div className="header-img">
                            <img src="https://cdn.dribbble.com/users/1484145/screenshots/14190807/contact_us_4x.png" alt="contact us" />
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Aboutus;
