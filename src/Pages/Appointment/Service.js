import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary mx-auto">{name}</h2>
                    <p className='text-center my-2'>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date</span>
                    }</p>
                    <p className='text-center mb-2'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center">

                        <label
                            onClick={() => setTreatment(service)}
                            for="booking-modal" class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;