import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Aboutus = () => {

    return (

        <div data-aos="fade-right"
            data-aos-duration="700"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className="container">

                <div className="flex items-center h-screen">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                        <div className="flex flex-col gap-y-10">
                            <h1 className="text-5xl font-bold text-center lg:text-left">About Us

                            </h1>
                            <div class="flex mt-0 justify-start"><div class="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div></div>
                            <p className="text-lg text-center lg:text-justify w-full lg:w-5/6">Welcome to Mediku, your number one source for all things . We're dedicated to providing you the very best of [product], with an emphasis on

                                Founded in 2021 by Yeasar Arefin, Mediku has come a long way from its beginnings in starting location. When founder name first started out, his/her/their passion for brand message - e.g. "eco-friendly cleaning products" drove them to start their own business.

                                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

                                Sincerely,

                                Yeasar Arefin</p>

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

        </div>
    );
};

export default Aboutus;
