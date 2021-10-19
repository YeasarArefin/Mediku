import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleService from './SingleService';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Services = () => {

    const doctors = useFetch();

    return (

        <>

            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">

                    <div className="container text-center mb-10">

                        <h1 className="text-4xl font-semibold title-font text-gray-900 mb-4">Our <span className="font-bold">Doctors</span></h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1">

                        <div className="w-full">
                            <Swiper
                                slidesPerView={3} pagination={{
                                    "clickable": true
                                }}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 1,

                                    },
                                    700: {
                                        slidesPerView: 2,

                                    },
                                    1496: {
                                        slidesPerView: 4
                                    }
                                }} className="mySwiper">

                                {
                                    doctors.map(doctor => (
                                        <SwiperSlide key={doctor.id}>
                                            <SingleService doctor={doctor} />
                                        </SwiperSlide>))
                                }

                            </Swiper>
                        </div>

                    </div>

                </div>

            </section>

        </>

    );

};

export default Services;
