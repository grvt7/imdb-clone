'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.svg';
import MenuLogo from '@/icons/MenuLogo';
import { FaCaretDown } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';

const Header = () => {
  return (
    <header className='bg-header text-center text-white md:py-3 lg:py-4 xl:py-4 2xl:py-4'>
      <div className='flex py-1 md:py-0 items-center justify-between px-8 2xl:px-[15rem] xl:px-[10rem] lg:px-[10rem] sm:px-[3rem]'>
        {/* logo and menu */}
        <div className='flex flex-row-reverse sm:flex-row items-center justify-evenly w-1/4 gap-2'>
          {/* logo */}
          <div className='h-6 w-10 relative sm:h-8 sm:w-14 lg:h-8 lg:w-20'>
            <Image src={logo} alt='IMDb Logo' fill={true} />
          </div>
          {/* menu */}
          <div className='flex hover:bg-headerHover rounded-sm sm:px-2 md:px-4 lg:px-6 xl:px-8 sm:py-[0.3rem]'>
            <MenuLogo />
            <h4 className='hidden sm:block'>Menu</h4>
          </div>
        </div>

        {/* dropdown and search */}
        <div className='hidden sm:flex md:grow items-center justify-center rounded-sm border border-white sm:w-[15rem] sm:h-6 md:h-8'>
          {/* dropdown */}
          <h4 className='flex h-full items-center justify-center bg-white text-black sm:w-1/4 md:w-1/6'>
            All
            <span>
              <FaCaretDown />
            </span>
          </h4>
          {/* Horizontal Line */}
          <span className='w-[0.05rem] bg'></span>
          {/* search */}
          <div className='h-full w-full'>
            <input
              className='border-none text-black outline-none px-2 w-full h-full'
              type='text'
              placeholder='Search IMDb'
            />
          </div>
        </div>

        {/* Wishlist and Search */}
        <div className='md:ml-6 flex items-center justify-evenly w-1/4 gap-2'>
          {/* wishlist */}
          <div className='hidden md:block hover:bg-headerHover rounded-sm md:px-4 lg:px-6 xl:px-8 sm:py-[0.3rem]'>
            <a href='#'>
              <h4>Wishlist</h4>
            </a>
          </div>
          {/* search icon */}
          <span className='sm:hidden px-2 py-1 hover:bg-headerHover rounded-sm'>
            <GoSearch />
          </span>
          {/* signin */}
          <div className='px-2 hover:bg-headerHover rounded-sm sm:px-2 md:px-4 lg:px-6 xl:px-8 sm:py-[0.3rem]'>
            <a href='#'>
              <h4>Sign&nbsp;In</h4>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
