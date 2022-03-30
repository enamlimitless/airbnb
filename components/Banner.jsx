import Image from 'next/image';
import React from 'react';
const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[700px]'>
            <Image src='https://links.papareact.com/0fm' alt='banner' layout='fill'
            objectFit='cover' />
            <div className='absolute top-1/2 text-center w-full font-medium'>
                <p className='text-sm sm:text-lg'>Not sure where to go? perfect</p>
                <button className='shadow-md font-medium mt-3 bg-white py-3 px-8 text-purple-500 rounded-full hover:shadow-lg active:scale-90 transition duration-150'>I&#39;m Flexible</button>
            </div>
        </div>
    );
};

export default Banner;