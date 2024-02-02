'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import logo from '../../../public/logo.svg';
import MenuLogo from '@/icons/MenuLogo';
import { GoSearch } from 'react-icons/go';
import SearchComponent from '../search';
import { searchDropDown } from '@/utils/headerSearchConfig';
import TopDrawer from './TopDrawer';
import SideDrawer from './SideDrawer';
import { HeaderPropTypes } from './types';

const Header: FC<HeaderPropTypes> = ({ showDrawer, setShowDrawer }) => {
  const [searchFilter, setSearchFilter] = useState(searchDropDown[0].name);
  const [search, setSearch] = useState('');

  return (
    <header className='w-[80rem]'>
      <TopDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <SideDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <nav className='py-2 px-2 lg:py-3 text-white'>
        <div className='flex items-center justify-between'>
          {/* Menu and Logo */}
          <div className='flex flex-row-reverse items-center justify-center lg:flex-row gap-4 font-bold'>
            <div>
              <Image src={logo} alt='IMDb Logo' />
            </div>
            <div
              className='flex px-[.5rem] py-[.4rem] active:bg-headerHover
          lg:hover:bg-headerHover rounded-sm gap-2 cursor-pointer'
              onClick={() => {
                setShowDrawer(true);
              }}>
              <MenuLogo />
              <span className='hidden lg:block'>Menu</span>
            </div>
          </div>

          {/* Search */}
          <div className='hidden grow sm:block px-12'>
            <SearchComponent
              searchFilter={searchFilter}
              setSearchFilter={setSearchFilter}
              setSearch={setSearch}
            />
          </div>
          {/* Withlist and SignIn */}
          <div className='flex items-center justify-center gap-4 font-bold'>
            <h4
              className='hidden lg:block px-[.5rem] py-[.4rem] active:bg-headerHover
          lg:hover:bg-headerHover rounded-sm'>
              <a href='#'>Wishlist</a>
            </h4>
            <span
              className='px-[.6rem] py-[.6rem] active:bg-headerHover
          lg:hover:bg-headerHover rounded-sm sm:hidden'>
              <GoSearch />
            </span>
            <h4
              className='px-[.5rem] py-[.4rem] active:bg-headerHover
          lg:hover:bg-headerHover rounded-sm'>
              <a href='#'>Sign&nbsp;In</a>
            </h4>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
