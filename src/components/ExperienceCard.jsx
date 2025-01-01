import React from 'react';

const ExperienceCard = (props) => {
    return (
        <div className="bg-[#141414] h-72 w-full p-7 rounded-lg">   
            <h2 className="text-3xl font-bold text-white">{props.title}</h2>
            <h3 className="text-xl text-white mt-3">{props.CompanyName}</h3>
            <p className="font-thin text-white mt-3">{props.StartDate} - {props.EndDate}</p>

            
            <div className='border-2 pl-5 py-3 mt-3 rounded-lg'>
                <ul className="list-disc text-sm text-white">
                    {props.Responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
                
            </div>
            
        </div>
    );
};

export default ExperienceCard;