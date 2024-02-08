import React from 'react';
import movie from '../../icons/Movie.jpg';
import Image from 'next/image';
import { TfiBookmark } from 'react-icons/tfi';
import { FiPlus } from 'react-icons/fi';

const CarousalCard = () => {
  return (
    <div
      className='min-[320px]:w-[3.5rem] min-[420px]:w-[4rem] min-[560px]:w-[5rem]
    sm:w-[7rem] md:w-[9rem] 2xl:w-[11rem] w-auto
    '>
      <div className='reletive'>
        <Image src={movie} alt='movie' quality={100} />
        <div className='absolute -top-[.06rem] -left-[.22rem] sm:-top-1 sm:-left-[.1rem] hover:text-white/50 text-gray-500/80 sm:text-6xl'>
          <span className='reletive'>
            <TfiBookmark />
            <span className='absolute text-[6px] top-1 left-[.3rem] sm:top-[1.27rem] sm:left-[1.33rem] sm:text-base text-white'>
              <FiPlus />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarousalCard;
