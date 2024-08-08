'use client';

import Header from "@/components/header";
import { useDrawerContext } from "@/context/Drawer";

const BodyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showDrawer, setShowDrawer } = useDrawerContext();
  // ${showDrawer && 'lg:overflow-hidden'}

  return (
    <body
      className={`flex flex-col justify-center items-center`}>
      <div className='flex items-center justify-center w-full bg-header text-white'>
        <Header showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </div>
      {children}
    </body>
  );
};

export default BodyLayout;
