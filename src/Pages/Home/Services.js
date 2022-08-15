import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vero!',
            img: fluoride

        },
        {
            _id: 2,
            name: 'Cavity Protection',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vero!',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vero!',
            img: whitening

        },
    ];
    return (
        <div className='my-28 '>
            <div className='text-center uppercase'>
                <h1 className='text-primary text-xl font-bold'>Our Services</h1>
                <h3 className='text-4xl font-semibold'>Services We Provide</h3>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 my-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;