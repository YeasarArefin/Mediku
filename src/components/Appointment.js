import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useDoctors from '../hooks/useDoctors';

const Appointment = () => {

    const doctors = useDoctors();
    const { id } = useParams();
    const newDoctor = doctors.find(doctor => doctor.id == id);

    return (

        <>

            <div className="container">

                <div className="h-screen flex items-center">

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10">

                        <div className="flex flex-col gap-y-7">

                            <h1 className="text-4xl font-extrabold">{newDoctor?.name}</h1>
                            <h2 className="text-xl text-indigo-600 font-semibold">{newDoctor?.designation}</h2>
                            <p className="w-5/6 text-gray-700">{newDoctor?.morediscription}</p>
                            <h1 className="text-5xl font-extrabold">$ {newDoctor?.price}</h1>

                            <div className="flex gap-x-5">

                                <div className="w-48">
                                    <button className="w-full px-3 py-3 bg-indigo-700 text-white outline-none focus:ring-4 focus:ring-indigo-300 transition duration-500 rounded-full transform hover:-translate-y-1 hover:scale-110">Take Appoinment</button>
                                </div>

                                <Link to="/home">
                                    <div className="w-48">
                                        <button className="w-full px-3 py-3 text-gray-900 border border-indigo-700 outline-none focus:ring-4 focus:ring-indigo-300 transition duration-500 rounded-full mb-5 ">Back To Home</button>
                                    </div>
                                </Link>

                            </div>

                        </div>

                        <div>

                            <img className="mx-auto rounded-2xl shadow-xl" src={newDoctor?.img} alt="doctor-img" />

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Appointment;
