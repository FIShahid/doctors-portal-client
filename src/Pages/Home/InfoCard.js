import React from 'react';

const InfoCard = ({ img, cardTitle, subTitle, bgColor }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgColor} px-2`}>
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{subTitle}</p>

            </div>
        </div>
    );
};

export default InfoCard;