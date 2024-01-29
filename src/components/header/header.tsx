'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../public/logo.svg';
import MenuLogo from '@/icons/MenuLogo';
import { GoSearch } from 'react-icons/go';
import Celebs from '@/icons/Celebs';
import Companies from '@/icons/Companies';
import Keywords from '@/icons/Keywords';
import Search from '@/icons/Search';
import Titles from '@/icons/Titles';
import Television from '@/icons/Television';
import SearchComponent from '../search/SearchComponent';

const Header = () => {
  const getSearchDropdownIcon = (icon: string) => {
    switch (icon) {
      case 'GoSearch':
        return <Search />;
      case 'MdLocalMovies':
        return <Titles />;
      case 'PiTelevision':
        return <Television />;
      case 'Celebs':
        return <Celebs />;
      case 'Companies':
        return <Companies />;
      case 'Keywords':
        return <Keywords />;
      default:
        return '';
    }
  };

  return (
    <header className='py-1 px-1 lg:px-[8rem] 2xl:px-[14rem] bg-header text-white'>
      <div className='flex items-center justify-between'>
        {/* Menu and Logo */}
        <div className='flex flex-row-reverse items-center justify-center lg:flex-row gap-2'>
          <div>
            <Image src={logo} alt='IMDb Logo' />
          </div>
          <div
            className='flex px-[.5rem] py-[.4rem]
          hover:bg-headerHover rounded-sm gap-2'
          >
            <MenuLogo />
            <span className='hidden lg:block'>Menu</span>
          </div>
        </div>

        {/* Search */}
        <div className='hidden grow sm:block px-12'>
          <SearchComponent />
        </div>
        {/* Withlist and SignIn */}
        <div className='flex items-center justify-center gap-2'>
          <h4
            className='hidden lg:block px-[.5rem] py-[.4rem]
          hover:bg-headerHover rounded-sm'
          >
            <a href='#'>Wishlist</a>
          </h4>
          <span
            className='px-[.6rem] py-[.6rem]
          hover:bg-headerHover rounded-sm sm:hidden'
          >
            <GoSearch />
          </span>
          <h4
            className='px-[.5rem] py-[.4rem]
          hover:bg-headerHover rounded-sm'
          >
            <a href='#'>Sign&nbsp;In</a>
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
