import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          

        }}>
          <img src={chair} className="lg:w-[594px] rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">We take care of your mouth like an angel. We taking care of your teeth. We want to make you smile! We're here to help.A smile you will love, an experience you will enjoy.</p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;