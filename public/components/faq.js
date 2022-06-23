import React, { useState } from 'react';

const Faq = ({ que, ans }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="lg:w-9/12 m-auto border-blue-700 border rounded-xl mb-4 hover:bg-blue-200 bg-blue-200" style={{ backgroundColor: isActive != true ? 'white' : 'rgba(29,78,216,0.2)' }}>
            <div className="flex justify-start" onClick={() => setIsActive(!isActive)}>
                <div className='text-5xl pl-4 pr-2 text-blue-700'>
                    {isActive ? '-' : '+'}</div>
                <h4 className='p-2 text-2xl'>{que}</h4>
            </div>
            {isActive && <p className="pr-10 pl-14 pb-6 text-lg">{ans}</p>}
        </div>
    );
};

export default Faq;