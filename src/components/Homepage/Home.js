import React, { useEffect } from 'react';

const Home = () => {

    return (

        <div data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className=" container my-20">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">

                    <div className="header-text ml-0 mt-0 text-center lg:text-left lg:ml-20 lg:mt-20 flex flex-col gap-y-10">

                        <h1 className="text-6xl font-bold text-gray-800">We Are Providing <br /> <span className="text-indigo-700">Best Affordable </span><br /> Online Health Care</h1>

                        <p className="w-full mb-10 lg:mb-0 lg:w-4/6 text-gray-500">Cure Your Deases Online With Mediku , Best Online Based E-Medicine Platform , Boock An Appoinment And Meet With Doctor EZ PZ.</p>

                    </div>

                    <div className="header-img">
                        <img src="https://thumbs.dreamstime.com/b/group-medical-doctors-isolated-white-unity-concept-149089801.jpg" alt="baner-img" />
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Home;
