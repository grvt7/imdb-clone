import React, { FC, useState } from 'react';
import { searchDropDown } from '@/components/utils/headerSearchConfig';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { SearchComponentPropType } from './types';
import { getIcons } from '../utils/icons';

const SearchComponent: FC<SearchComponentPropType> = ({
  searchFilter,
  setSearchFilter,
  setSearch,
}) => {
  const [caret, setCaret] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(searchDropDown[0].name);

  return (
    <div className='flex items-center relative'>
      <div
        className='w-1/8 px-2 py-[0.2rem] inline-flex bg-white text-black rounded-l-sm'
        onClick={() => setCaret(!caret)}>
        <h4 className='flex items-center justify-center flex-1 gap-1 font-semibold'>
          {selectedSearch}
          <span>{caret ? <FaCaretUp /> : <FaCaretDown />}</span>
        </h4>
      </div>
      <div
        className='h-[1.9rem] w-[0.07rem] bg-gray-200 inline-block'
        style={{ marginLeft: '-2px' }}></div>
      <input
        className='border-none outline-none grow px-2 py-[0.2rem] text-black rounded-r-sm'
        type='text'
        placeholder='Search IMDb Database'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className={`${caret ? 'inline-block' : 'hidden'} absolute top-8 bg-header rounded-sm w-1/3 sm:w-[10rem] md:w-[12rem] lg:w-[14rem]`}>
        <ul className='flex flex-col my-1' onMouseLeave={() => setCaret(false)}>
          {searchDropDown.map((item) => (
            <li
              key={item.value}
              className='hover:bg-headerHover rounded-sm py-2 px-2 group'
              onClick={() => {
                setSelectedSearch(item.name);
                setCaret(false);
              }}>
              <div className={`flex gap-2 cursor-pointer`}>
                <span
                  className={`${selectedSearch === item.name ? 'text-yellow-400' : 'text-icon group-hover:text-white/95'}`}>
                  {getIcons(item.icon)}
                </span>
                <span
                  className={`${selectedSearch === item.name ? 'text-yellow-400' : 'text-white'}`}>
                  {item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
