import React from 'react';

import svg1 from "./../assets/images/icons/svg/1.png";
import svg3 from "./../assets/images/icons/svg/3.png";
import svg4 from "./../assets/images/icons/svg/4.png";
import svg5 from "./../assets/images/icons/svg/5.png";
import svg6 from "./../assets/images/icons/svg/6.png";
import svg7 from "./../assets/images/icons/svg/7.png";
import svg8 from "./../assets/images/icons/svg/8.png";
import svg9 from "./../assets/images/icons/svg/9.png";
import svg10 from "./../assets/images/icons/svg/10.png";
import svg11 from "./../assets/images/icons/svg/11.png";
import svg12 from "./../assets/images/icons/svg/12.png";
import svg13 from "./../assets/images/icons/svg/13.png";
import svg14 from "./../assets/images/icons/svg/14.png";
import svg15 from "./../assets/images/icons/svg/15.png";
import svg16 from "./../assets/images/icons/svg/16.png";
import svg17 from "./../assets/images/icons/svg/17.png";
import svg18 from "./../assets/images/icons/svg/18.png";
import svg19 from "./../assets/images/icons/svg/19.png";
import svg20 from "./../assets/images/icons/svg/20.png";


import car_repair from "./../assets/images/service/car_repair.jpg";
import car_engine_repair from "./../assets/images/service/car_engine_repair.jpg";
import car_transmission_repair from "./../assets/images/service/car_transmission_repair.jpg";
import car_gearbox_repair from "./../assets/images/service/car_gearbox_repair.jpg";
import car_steering_repair from "./../assets/images/service/car_steering_repair.jpg";
import car_suspension_repair from "./../assets/images/service/car_suspension_repair.jpg";
import car_leak_repair from "./../assets/images/service/car_leak_repair.jpg";
import car_ac_repair from "./../assets/images/service/car_ac_repair.jpg";
import car_overheating from "./../assets/images/service/car_overheating.jpg";
import car_driveshaft_repair from "./../assets/images/service/car_driveshaft_repair.jpg";
import car_differential_repair from "./../assets/images/service/car_differential_repair.jpg";
import car_transfer_case_repair from "./../assets/images/service/car_transfer_case_repair.jpg";
import car_wash from "./../assets/images/service/car_wash.jpg";
import car_wheel_alignment from "./../assets/images/service/car_wheel_alignment.jpg";
import car_ppf_tinting from "./../assets/images/service/car_ppf_tinting.jpg";
import car_oil_change from "./../assets/images/service/car_oil_change.jpg";
import car_off_road_modification from "./../assets/images/service/car_off_road_modification.jpg";
import car_detailing_polish from "./../assets/images/service/car_detailing_polish.jpg";
import car_battery_replacement from "./../assets/images/service/car_battery_replacement.jpg";




const ServiceList = () => {

    const services = [
        {
            "title": "Car Repair",
            "image": car_repair,
            "description": "Comprehensive car repair solutions, including diagnostics, mechanical repairs, and electrical system troubleshooting to keep your vehicle in top condition.",
            "svg": svg1
        },
        {
            "title": "Car Engine Repair",
            "image": car_engine_repair,
            "description": "Expert engine diagnostics and repairs to enhance performance, fix overheating issues, and extend the life of your vehicle's engine.",
            "svg": svg3
        },
        {
            "title": "Car Transmission Repair",
            "image": car_transmission_repair,
            "description": "Specialized transmission repair services, including fluid change, gearbox maintenance, and complete transmission rebuilds for seamless gear shifting.",
            "svg": svg4
        },
        {
            "title": "Car Gearbox Repair",
            "image": car_gearbox_repair,
            "description": "Precision gearbox repair services, covering diagnostics, repairs, and replacements to improve efficiency and driving comfort.",
            "svg": svg5
        },
        {
            "title": "Car Steering Repair",
            "image": car_steering_repair,
            "description": "Expert steering system repairs, including rack and pinion fixes, power steering fluid replacement, and alignment adjustments for improved handling.",
            "svg": svg6
        },
        {
            "title": "Car Suspension Repair",
            "image": car_suspension_repair,
            "description": "Suspension system inspections and repairs to enhance ride comfort, stability, and overall vehicle safety.",
            "svg": svg7
        },
        {
            "title": "Car Leak Repair",
            "image": car_leak_repair,
            "description": "Professional detection and repair of engine oil, coolant, and transmission fluid leaks to prevent costly damage and ensure vehicle longevity.",
            "svg": svg8
        },
        {
            "title": "Car AC Repair",
            "image": car_ac_repair,
            "description": "Specialized air conditioning repair services, including compressor replacement, refrigerant refilling, and climate control system diagnostics.",
            "svg": svg9
        },
        {
            "title": "Car Overheating",
            "image": car_overheating,
            "description": "Cooling system repairs, including radiator flushing, thermostat replacement, and water pump repairs to prevent engine overheating.",
            "svg": svg10
        },
        {
            "title": "Car Driveshaft Repair",
            "image": car_driveshaft_repair,
            "description": "Driveshaft balancing, U-joint repairs, and complete driveshaft replacement services to eliminate vibrations and ensure a smooth ride.",
            "svg": svg11
        },
        {
            "title": "Car Differential Repair",
            "image": car_differential_repair,
            "description": "Comprehensive differential repair and maintenance services, including gear adjustments, bearing replacements, and lubrication services.",
            "svg": svg12
        },
        {
            "title": "Car Transfer Case Repair",
            "image": car_transfer_case_repair,
            "description": "Expert transfer case repairs for four-wheel-drive and all-wheel-drive vehicles to maintain power distribution and off-road performance.",
            "svg": svg13
        },
        {
            "title": "Car Wash",
            "image": car_wash,
            "description": "Professional car washing and detailing services to keep your vehicle clean and protected, using high-quality cleaning products.",
            "svg": svg14
        },
        {
            "title": "Car Wheel Alignment",
            "image": car_wheel_alignment,
            "description": "Precision wheel alignment services to enhance fuel efficiency, prolong tire life, and improve vehicle handling.",
            "svg": svg15
        },
        {
            "title": "Car PPF & Tinting",
            "image": car_ppf_tinting,
            "description": "High-quality Paint Protection Film (PPF) and window tinting services to protect your car's paint and enhance privacy.",
            "svg": svg16
        },
        {
            "title": "Car Oil Change",
            "image": car_oil_change,
            "description": "Quick and efficient oil change services using high-quality engine oils to improve performance and extend engine life.",
            "svg": svg17
        },
        {
            "title": "Car Off-Road Modification",
            "image": car_off_road_modification,
            "description": "Specialized off-road modification services, including lift kits, suspension upgrades, and heavy-duty accessories for off-road adventures.",
            "svg": svg18
        },
        {
            "title": "Car Detailing & Polish",
            "image": car_detailing_polish,
            "description": "Complete interior and exterior car detailing services, including deep cleaning, polishing, and ceramic coating for a showroom finish.",
            "svg": svg19
        },
        {
            "title": "Car Battery Replacement",
            "image": car_battery_replacement,
            "description": "Reliable car battery testing and replacement services to ensure your vehicle starts smoothly every time.",
            "svg": svg20
        }
    ];

    return (

        <section className="bg-gray-200">
            <div className="container mx-auto px-5 py-5 md:px-10 md:py-10">
                {/* <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group pb-24 relative overflow-hidden">
                            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-red-700 z-10"></div>

                            <img
                                src={service.image}
                                className="transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full object-cover"
                                alt={service.title}
                            />

                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 text-center px-4">
                                {service.description}
                            </p>

                            <div className="bg-red-700 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
                                <div className="z-20 absolute -top-5 w-full flex justify-center">
                                    {/* Dynamic SVG Icon */}
                                    <img
                                        className="group-hover:text-red-700 border-2 border-white group-hover:bg-white w-10 h-10 p-1 bg-red-700 rounded-full transition-all"
                                        src={service.svg}
                                    ></img>
                                </div>

                                <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                                    <div className="h-6 bg-red-900 -rotate-45 transform origin-bottom-right"></div>
                                </div>

                                <h2 className="font-semibold uppercase text-white">{service.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceList;