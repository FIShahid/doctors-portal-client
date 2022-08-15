import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle={"Opening Hour"} subTitle="Open at 10.00 AM - 11.00 PM" img={clock}></InfoCard>
            <InfoCard bgColor="bg-accent" cardTitle={"Visit Our Location"} subTitle="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle={"Contact Us Now"} subTitle="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default Info;