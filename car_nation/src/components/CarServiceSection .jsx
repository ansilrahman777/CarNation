import React from "react";
import staticimage from "./../assets/images/image/staticimage.png";
import rotateimage from "./../assets/images/image/rotateimage.png";
import carslide from "./../assets/images/image/carslide.png";

import h1 from "./../assets/images/icons/h1.png";
import h2 from "./../assets/images/icons/h2.png";
import h3 from "./../assets/images/icons/h3.png";
import h4 from "./../assets/images/icons/h4.png";
import h5 from "./../assets/images/icons/h5.png";
import h6 from "./../assets/images/icons/h6.png";

const servicesLeft = [
    { title: "Vehicle Diagnostics", description: "Comprehensive diagnostics for your vehicle.", icon: h1 },
    { title: "Car Cleaning", description: "Professional exterior and interior cleaning.", icon: h6 },  // Changed to FaBroom
    { title: "Auto Painting", description: "High-quality paint jobs for all vehicles.", icon: h4 }
];

const servicesRight = [
    { title: "Spare Parts", description: "Genuine and high-quality auto parts.", icon: h2 },
    { title: "Service Guarantee", description: "Service warranty for quality assurance.", icon: h3 },
    { title: "Car Repairs", description: "Expert repairs for all vehicle issues.", icon: h5 }
];





const CarServiceSection = () => {
    return (
        <section className="bg-white py-16">

            <div
                className="relative bg-cover bg-center py-16"
                style={{ backgroundImage: `url(${carslide})` }}
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    <div className="space-y-6 text-right">
                        {servicesLeft.map((service, index) => (
                            <div key={index} className="flex items-center space-x-4 justify-end">

                                <div className="bg-transparent p-6 shadow-md rounded-lg w-64">
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                                <img className="bg-transparent w-12  rounded-full"
                                    src={service.icon}
                                    alt="icon"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="relative flex justify-center items-center">
                        <img
                            src={rotateimage}
                            alt="Car Top View"
                            className="w-80 h-80 object-cover absolute animate-spin"
                            style={{ animationDuration: "8s", zIndex: 0 }}
                        />

                        <img
                            src={staticimage}
                            alt="Car Top View"
                            className="w-[400px] h-[400px]  object-contain relative z-10"
                        />
                    </div>


                    <div className="space-y-6 text-left">
                        {servicesRight.map((service, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <img className="bg-transparent w-12  rounded-full "
                                    src={service.icon}
                                    alt="icon"
                                />
                                <div className="bg-transparent p-6 shadow-md rounded-lg w-64">
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CarServiceSection;
