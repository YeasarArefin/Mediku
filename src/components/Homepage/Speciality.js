import React from 'react';

const Speciality = () => {

    const speciality = [

        {
            id: 1,
            img: "https://i.ibb.co/wN2XsRk/heartbeat.png",
            title: "Admit Patient Here",
            description: "You Can Meet Not Only Doctors . You Can Addmit A Patient On Hospital With Best Rate With Mekiku"

        },
        {
            id: 2,
            img: "https://i.ibb.co/bQ4X9f7/scissors-outline.png",
            title: "Best Surgery",
            description: "Mekdiku Provides one of the best sergent , best surgery experience in the country at the best price"

        },
        {
            id: 3,
            img: "https://i.ibb.co/6BDGXFW/user.png",
            title: "Best Service",
            description: "Our Best App provides best services for your appoinment , You will notifi automiticly when you meet araived"

        }

    ];

    return (

        <div data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <section className="text-gray-600 body-font">

                <div className="container px-5 py-10 mx-auto">

                    <div className="text-center mb-20">

                        <h1 className="text-4xl font-semibold title-font text-gray-900 mb-4">Our <span className="font-bold ">Speciality</span></h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-600 inline-flex"></div>
                        </div>

                    </div>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                        {
                            speciality.map(item => <div key={item.id} className="p-4 md:w-1/3 flex flex-col text-center items-center">

                                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-5 flex-shrink-0">

                                    <img src={item.img} alt="item" />

                                </div>

                                <div className="flex-grow">

                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                                    <p className="leading-relaxed text-base">{item.description}</p>

                                    <p className="mt-3 text-indigo-600 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </p>

                                </div>

                            </div>)

                        }

                    </div>

                </div>

            </section>

        </div>

    );

};

export default Speciality;
