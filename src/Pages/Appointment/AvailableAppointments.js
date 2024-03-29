import { format, set } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl font-bold text-center text-secondary my-8'>Available Appointment on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map((service) => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    >

                    </Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppointments;