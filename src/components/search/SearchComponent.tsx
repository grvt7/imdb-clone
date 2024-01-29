import React, { useState } from 'react';
import { searchDropDown } from '@/components/search/config';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const SearchComponent = () => {
  const [caret, setCaret] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(searchDropDown[0].name);
  return (
    <div className='flex items-center'>
      <div className='w-1/8 px-2 py-[0.2rem] inline-block bg-white text-black rounded-l-sm'>
        <h4 className='flex items-center justify-center flex-1 gap-1'>
          All<span>{caret ? <FaCaretUp /> : <FaCaretDown />}</span>
        </h4>
      </div>
      <div
        className='h-[1.9rem] w-[0.07rem] bg-gray-200 inline-block'
        style={{ marginLeft: '-2px' }}
      ></div>
      <input
        className='border-none outline-none grow px-2 py-[0.2rem] text-black rounded-r-sm'
        type='text'
        placeholder='IMDb Search'
      />
    </div>
  );
};

export default SearchComponent;
