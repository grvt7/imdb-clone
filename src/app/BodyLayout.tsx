'use client';

import Header from '@/components/header';
import { useDrawerContext } from '@/context/drawer';

const BodyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showDrawer, setShowDrawer } = useDrawerContext();

  return (
    <body
      className={`flex flex-col justify-center items-center ${showDrawer && 'lg:overflow-hidden'}`}>
      <div className='flex items-center justify-center w-full bg-header text-white'>
        <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </div>
      {children}
    </body>
  );
};

export default BodyLayout;
