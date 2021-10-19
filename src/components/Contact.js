import React from 'react';
import { FaStethoscope } from 'react-icons/fa';

const Contact = () => {

    return (

        <div className=" justify-center">

            <section className="text-gray-600 body-font relative">

                <div className="h-screen absolute inset-0 bg-gray-300">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977779024!2d90.34928575030223!3d23.780777744614074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1634553808590!5m2!1sen!2sbd" className="w-full h-full" title="map" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }} allowFullScreen="" loading="lazy"></iframe>

                </div>

                <div className="flex h-screen items-center">

                    <div className="container mx-auto flex">

                        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mt-10 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">

                            <div className="mb-10">
                                <h1 className="text-3xl text-indigo-700 flex items-center gap-x-3 font-extrabold justify-center"><FaStethoscope />Mediku</h1>
                            </div>

                            <h2 className="text-gray-900 text-2xl mb-1 title-font text-center font-bold">Contact Us</h2>
                            <div className="flex mb-5 mt-3 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
                            </div>
                            <p className="leading-relaxed mb-5 text-gray-600 text-center">Share Your Feedback With Us</p>
                            <div className="relative mb-4">

                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input className="w-full pl-3 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-500 text-gray-700" type="text" />

                            </div>

                            <div className="relative mb-4">

                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input className="w-full pl-3 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-500 text-gray-700" type="email" />

                            </div>

                            <div className="relative mb-4">

                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" rows="5" className="w-full pl-3 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-500 text-gray-700"></textarea>

                            </div>

                            <button className="px-3 py-3 bg-indigo-700 text-white outline-none focus:ring-4 focus:ring-indigo-300 transition duration-500 rounded-full mb-5">Submit</button>

                            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>

                        </div>

                    </div>


                </div>

            </section>

        </div>

    );

};

export default Contact;