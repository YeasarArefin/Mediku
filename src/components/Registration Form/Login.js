import React from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { CgLock } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    return (

        <>

            <div className="flex h-screen items-center justify-center">

                <div className="container mt-16">

                    <div className="w-2/6 p-5 rounded-lg shadow-2xl mx-auto flex flex-col gap-y-10">

                        <div>
                            <h1 className="text-3xl text-indigo-700 flex items-center gap-x-3 font-extrabold justify-center"><FaClinicMedical />Mediku</h1>
                        </div>

                        <form className="flex flex-col gap-y-5" action="">

                            <div className="flex relative">
                                <HiOutlineMail className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="emial" placeholder="Email" />
                            </div>

                            <div className="flex relative">
                                <CgLock className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="emial" placeholder="Password" />
                            </div>

                            <input className="py-3 px-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-500" type="submit" value="Sing In" />

                            <h1 className="text-center text-indigo-700 font-semibold hover:underline">Need An Account ?</h1>

                            <hr />

                            <h1 className="text-center text-gray-500">OR</h1>

                            <button className="flex items-center justify-center gap-x-3 py-3 px-2  text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-500">
                                <FcGoogle /> Sing In With Google
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

};

export default Login;