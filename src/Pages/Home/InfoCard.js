import React from 'react';

const InfoCard = ({ img, cardTitle, subTitle, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor} p-2`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{subTitle}</p>

            </div>
        </div>
    );
};

export default InfoCard;