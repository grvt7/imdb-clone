import React, { FC, useState } from 'react';
import Cross from '@/icons/Cross';
import { AnimatePresence, motion } from 'framer-motion';
import { DrawerPropTypes } from './types';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { getIcons } from '../../utils/icons';
import { sideDrawerConfig } from './config';

const SideDrawer: FC<DrawerPropTypes> = ({ showDrawer, setShowDrawer }) => {
  const [active, setActive] = useState('');
  const variants = {
    open: {
      x: 0,
      // opacity: 1,
      transition: {
        type: 'linear',
        duration: 0.5,
      },
    },
    closed: {
      x: '-100%',
      // opacity: 0,
      transition: {
        type: 'linear',
        duration: 0.5,
      },
    },
  };

  const setActiveAccordion = (value: string) => {
    if (value === active) {
      setActive('');
    } else {
      setActive(value);
    }
  };

  return (
    <AnimatePresence>
      {showDrawer && (
        <motion.div
          className='inline-flex flex-col absolute h-[100vh] w-[18rem] z-[999] bg-drawer lg:hidden overflow-y-scroll'
          initial={{
            x: '-100%',
            // opacity: 0,
          }}
          animate={showDrawer ? 'open' : 'closed'}
          exit='closed'
          variants={variants}>
          {/* Close Side Drawer */}
          <div className='stripe flex items-center justify-end w-full gradient px-2 min-h-[3.3rem] cursor-pointer'>
            <span
              className='py-[0.4rem] px-[0.4rem] rounded-full hover:bg-white/10 active:bg-white/30'
              onClick={() => setShowDrawer(false)}>
              <Cross />
            </span>
          </div>
          {/* Menu List */}
          <div className='flex flex-col h-max text-white my-2'>
            <Accordion allowToggle>
              {sideDrawerConfig.map((item) => (
                <AccordionItem
                  key={item.value}
                  borderBlockStartColor={
                    active === item.value && item.value !== 'movies'
                      ? '#4c4c4c'
                      : ''
                  }
                  borderBlockStartWidth={
                    active === item.value && item.value !== 'movies'
                      ? '1.8px'
                      : ''
                  }
                  borderBlockEndColor={
                    active === item.value && item.value !== 'community'
                      ? '#4c4c4c'
                      : ''
                  }
                  borderBlockEndWidth={
                    active === item.value && item.value !== 'community'
                      ? '1.8px'
                      : ''
                  }>
                  <h2>
                    <AccordionButton
                      className={`gap-2 py-2 group px-4`}
                      onClick={() => setActiveAccordion(item.value)}>
                      <Box
                        as='span'
                        flex='0'
                        textAlign='left'
                        className={`${active === item.value ? 'text-yellow-400' : 'text-icon group-hover:text-white/90'} `}>
                        {getIcons(item.icon)}
                      </Box>
                      <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        className={`${active === item.value ? 'text-yellow-400' : 'text-white'}`}>
                        {item.type}
                      </Box>
                      <AccordionIcon
                        color={'gray'}
                        _groupHover={{ textColor: 'white', opacity: 0.8 }}
                        className='text-2xl'
                      />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <ul className=''>
                      {item.data.map((subItem) => (
                        <li
                          key={subItem.value}
                          className='py-2 hover:bg-headerHover text-sm'>
                          <a href='#' className='pl-[3rem]'>
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
