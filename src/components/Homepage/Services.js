import React from 'react';
import useFetch from '../../hooks/useFetch';
import SingleService from './SingleService';

const Services = () => {

    const [doctors] = useFetch();

    return (

        <>

            <section class="text-gray-600 body-font">

                <div class="container px-5 py-24 mx-auto">

                    <div className="container text-center mb-10">

                        <h1 className="text-4xl font-semibold title-font text-gray-900 mb-4">Our <span className="font-bold">Doctors</span></h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
                        </div>

                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {
                            doctors.map(doctor => <SingleService doctor={doctor} />)
                        }

                    </div>

                </div>

            </section>

        </>

    );

};

export default Services;
