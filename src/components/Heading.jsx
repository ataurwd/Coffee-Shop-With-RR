import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='text-center py-12 space-y-5'>
            <h1 className='text-4xl font-thin'>{title}</h1>
            <p className='lg:w-1/2 lg:mx-auto w-full px-3'>{subTitle}</p>
        </div>
    );
};

export default Heading;