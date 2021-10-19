import React, { useState } from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { CgLock } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { BsImage } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const { googleLogin, registerWithEmailPassword } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img, setImg] = useState("");
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        registerWithEmailPassword(email, password, name, img);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleImg = (e) => {
        setImg(e.target.value);
    };

    const LoginGoogle = () => {
        googleLogin()
            .then(result => {
                history.push("/home");
            });
    };


    return (

        <div data-aos="fade-right"
            data-aos-duration="700"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className="flex h-screen items-center justify-center">

                <div className="container mt-16">

                    <div className="w-full lg:w-2/6 p-5 rounded-lg shadow-2xl mx-auto flex flex-col gap-y-10">

                        <div>
                            <h1 className="text-3xl text-indigo-700 flex items-center gap-x-3 font-extrabold justify-center"><FaStethoscope />Mediku</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

                            <div className="flex relative">
                                <FiUser className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input onBlur={handleName} className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="text" placeholder="Name" />
                            </div>

                            <div className="flex relative">
                                <HiOutlineMail className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input onBlur={handleEmail} className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="emial" placeholder="Email" />
                            </div>

                            <div className="flex relative">
                                <CgLock className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input onBlur={handlePassword} className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="password" placeholder="Password" />
                            </div>

                            <div className="flex relative">
                                <BsImage className="absolute text-xl top-4 left-3 text-indigo-600" />
                                <input onBlur={handleImg} className="w-full pl-10 pr-3 py-3 border focus:shadow-lg border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500 text-gray-700" type="text" placeholder="Image URL" />
                            </div>

                            <button className="py-3 px-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-500" type="submit" value="Register" >Register</button>

                            <Link to="/login">
                                <h1 className="text-center text-indigo-700 font-semibold hover:underline">Already Have An Account ?</h1>
                            </Link>

                            <hr />

                            <h1 className="text-center text-gray-500">OR</h1>
                            {/* onClick={googleSingIn} */}
                            <button onClick={LoginGoogle} className="flex items-center justify-center gap-x-3 py-3 px-2  text-gray-700 font-semibold border border-gray-300 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-500">
                                <FcGoogle className="text-2xl" /> Sing In With Google
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Register;
