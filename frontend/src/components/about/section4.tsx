import React, { Suspense, lazy } from 'react';
import LazyImage from './lazyImage';
import Ehrenamt from './ehrenamt';
import { ThreeDots } from 'react-loader-spinner';
import SlideInFromSide from '../../animations/slideInFromSide';

const About_Section4 = () => {

    return (
        <>
            <div className='min-h-svh min-w-screen grid md:grid-cols-2' >
                <div className='my-2 mr-2 grid grid-rows-[3fr_8fr] items-center'>
                    <h1 className='text-5xl md:text-8xl flex justify-center items-center h-32 text-gray-200'>Ehrenamt</h1>
                    <SlideInFromSide>
                        <Suspense fallback={<div className='min-h-full flex justify-center items-center'><ThreeDots /></div>}>
                            <LazyImage 
                                src='/about/wallpapers/ehrenamt_1.jpg'
                                width={1920} 
                                height={1080} 
                                alt='Wallpaper'
                                className='object-cover min-h-full rounded-r-3xl' 
                            />
                        </Suspense>
                    </SlideInFromSide>
                </div>
                <Ehrenamt />
            </div>
        </>
    )
}

export default React.memo(About_Section4);
