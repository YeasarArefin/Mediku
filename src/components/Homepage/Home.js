import React from 'react';

const Home = () => {

    return (

        <>

            <div className="container my-20">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">

                    <div className="header-text ml-0 mt-0 text-center lg:text-left lg:ml-20 lg:mt-20 flex flex-col gap-y-10">

                        <h1 className="text-6xl font-bold text-gray-800">We Are Providing <br /> <span className="text-indigo-700">Best Affordable </span><br /> Online Health Care</h1>

                        <p className="w-full mb-10 lg:mb-0 lg:w-4/6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab nostrum deserunt illum non! Tempora animi impedit reiciendis aliquid vitae!</p>

                    </div>

                    <div className="header-img">
                        <img src="https://thumbs.dreamstime.com/b/group-medical-doctors-isolated-white-unity-concept-149089801.jpg" alt="baner-img" />
                        {/* <img src="https://image.freepik.com/free-vector/detailed-doctors-nurses_52683-60321.jpg" alt="doctors" /> */}
                    </div>

                </div>

            </div>

        </>

    );
};

export default Home;
