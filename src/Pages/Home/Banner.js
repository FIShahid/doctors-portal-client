import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
      }}>
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">We take care of your mouth like an angel. We taking care of your teeth. We want to make you smile! We're here to help.A smile you will love, an experience you will enjoy.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;