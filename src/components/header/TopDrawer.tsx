'use client';

import Image from 'next/image';
import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DrawerPropTypes } from './types';
import logo from '../../../public/logo.svg';
import Cross from '@/icons/Cross';
import { Grid, GridItem } from '@chakra-ui/react';
import { topDrawerConfig } from './config';
import { getIcons } from '../../utils/icons';

const TopDrawer: FC<DrawerPropTypes> = ({ showDrawer, setShowDrawer }) => {
  const variants = {
    open: {
      y: 0,
      // opacity: 1,
      transition: {
        type: 'linear',
        duration: 0.5,
      },
    },
    closed: {
      y: '-100%',
      // opacity: 0,
      transition: {
        type: 'linear',
        duration: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
      {showDrawer && (
        <motion.div
          className='hidden z-[999] h-full lg:inline-flex w-full bg-drawer text-white absolute overflow-y-auto left-0 justify-center'
          initial={{ y: '-100%' }}
          animate={showDrawer ? 'open' : 'closed'}
          exit={'closed'}
          variants={variants}>
          <div className='pt-6 justify-evenly'>
            {/* logo and close drawer */}
            <div
              className='flex items-center justify-between mb-8'
              id='parent'
              style={{ height: '5rem' }}>
              <div>
                <Image
                  src={logo}
                  alt='IMDb Logo'
                  height={100}
                  width={100}
                  quality={100}
                />
              </div>
              <span
                className='py-[0.8rem] px-[0.8rem] bg-yellow-500/90 rounded-full hover:bg-yellow-500/80 cursor-pointer'
                onClick={() => setShowDrawer(false)}>
                <Cross text={'black'} />
              </span>
            </div>

            {/* Menu */}
            <div className='flex flex-wrap'>
              <Grid templateColumns='repeat(3, 1fr)' gap={60}>
                {topDrawerConfig.map(
                  (
                    item,
                    index, //for each item in topDrawerConfig
                  ) => (
                    <GridItem key={index}>
                      {item.map(
                        (
                          subItem,
                          index, //for each subItem in topDrawerConfig
                        ) => (
                          <div
                            key={index}
                            className={`${subItem.value === 'watch' && 'mt-8'}`}>
                            <div className={`flex items-center gap-4 pb-2`}>
                              <span className='text-3xl'>
                                {getIcons(subItem.icon)}
                              </span>
                              <div className={`font-bold text-2xl`}>
                                {subItem.type}
                              </div>
                            </div>
                            <div className='text-lg'>
                              {subItem.data.map((data, index) => {
                                return (
                                  <a
                                    key={data.value}
                                    className='block py-1 pl-[2.5rem] hover:underline'
                                    href='#'>
                                    {data.name}
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        ),
                      )}
                    </GridItem>
                  ),
                )}
              </Grid>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopDrawer;
