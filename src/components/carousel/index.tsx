'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image from '../../icons/temp.jpg';
import movie from '../../icons/Movie.jpg';
import NextIcon from '@/icons/NextIcon';
import PreviousIcon from '@/icons/PreviousIcon';
import CarousalCard from '../CarousalCard';
import PlayButton from '@/icons/PlayButton';
import CarousalNext from './CarousalNext';

const Carousel = () => {
  const slides = [
    { name: 'One', url: image, banner: movie },
    { name: 'Two', url: image, banner: movie },
    { name: 'Three', url: image, banner: movie },
    { name: 'Four', url: image, banner: movie },
    { name: 'Five', url: image, banner: movie },
  ];
  const [curr, setCurr] = useState(0);
  const autoSlide = false;
  const autoSlideInterval = 3000;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className='flex justify-center text-white mx-2 xl:mx-0'>
        {/* Carousal */}
        <div className='text-white overflow-x-hidden w-full select-none group'>
          <div className='overflow-hidden relative'>
            <div
              className='flex transition-transform ease-out duration-500 w-full h-full'
              style={{ transform: `translateX(${curr * -100}%)` }}>
              {slides.map((slide) => (
                <>
                  <div
                    className='w-full flex-shrink-0 2xl:h-[35rem] xl:h-[34rem] lg:h-[30rem] 
                  md:h-[37rem] sm:h-[28rem] min-[320px]:h-[13rem] min-[420px]:h-[16rem] 
                  min-[560px]:h-[21rem] flex flex-col relative'
                    key={slide.name}>
                    <Image src={slide.url} alt={slide.name} />
                    <div className='flex text-white bg-transparent bottom-0 sm:pl-3 absolute'>
                      <CarousalCard />
                      <div className='flex px-4 max-w-[30rem] w-auto'>
                        <div className='flex flex-col sm:flex-row text-2xl justify-end sm:items-end'>
                          <div
                            className='w-[2rem] h-[2rem] sm:w-[4.5rem] sm:h-[4.5rem] lg:w-[5rem] 
                            lg:h-[5rem] xl:w-[4rem] xl:h-[4rem] 2xl:w-[5rem] 2xl:h-[5rem] group-hover:text-yellow-400'>
                            <PlayButton />
                          </div>
                          <div className='flex flex-col text-sm sm:pl-4 sm:text-4xl sm:pb-[.5rem] leading-none'>
                            <span className='text-sm sm:text-xl'>
                              {"'Road House'"}
                            </span>
                            <span className='text-[.4rem] sm:text-xl'>
                              Watch the Trailer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className='sm:flex hidden sm:h-[12rem] md:h-[18rem] lg:h-[16rem] xl:h-[18rem] items-end justify-between inset-x-0 inset-y-[4rem] absolute 2xl:-top-12 lg:-top-6'>
              <div
                className='rounded-[.2rem] shadow px-3 py-5 border border-white cursor-pointer bg-gray-700/50 text-white hover:text-yellow-500'
                onClick={prev}>
                <PreviousIcon />
              </div>
              <div
                className='rounded-[.2rem] shadow px-3 py-5 border border-white cursor-pointer bg-gray-700/50 text-white hover:text-yellow-500'
                onClick={next}>
                <NextIcon />
              </div>
            </div>
          </div>
        </div>
        {/* Up Next */}
        <div className='hidden lg:block w-[40.7rem]'>
          <div className='px-4 h-full'>
            <div className='text-xl text-yellow-500'>Up Next</div>
            <div className='flex flex-col 2xl:h-[31rem] xl:h-[30rem] lg:h-[26rem] py-2 px-2 gap-4 gradientDown overflow-y-hidden'>
              <CarousalNext slide={slides[(curr + 1) % slides.length]} />
              <CarousalNext slide={slides[(curr + 2) % slides.length]} />
              <CarousalNext slide={slides[(curr + 3) % slides.length]} />
            </div>
            <div className='flex items-end text-xl test-yellow font-bold'>
              Browse Trailers
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
