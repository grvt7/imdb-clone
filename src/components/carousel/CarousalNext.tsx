import Image, { StaticImageData } from 'next/image';
import React from 'react';
import PlayButton from '@/icons/PlayButton';

type SlidePropType = {
  name: string;
  url: StaticImageData;
  banner: StaticImageData;
};
interface CarousalNextProps {
  slide: SlidePropType;
}

const CarousalNext = ({ slide }: CarousalNextProps) => {
  return (
    <div className='flex'>
      <div className='xl:w-[6rem] lg:w-[5rem]'>
        <Image src={slide.banner} alt='movie' />
      </div>
      <div className='flex flex-col pl-2 group mt-4'>
        <div className='w-8 ml-1 group-hover:text-yellow-400'>
          <PlayButton />
        </div>
        <div className='flex flex-col py-2 px-2'>
          <div className='flex flex-wrap text-xl'>{slide.name}</div>
          <div className='text-[.8rem] text-gray-400/90'>Watch The Trailer</div>
        </div>
      </div>
    </div>
  );
};

export default CarousalNext;
