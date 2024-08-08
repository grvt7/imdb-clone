'use client';

import { createContext, useContext, useState } from "react";

type Drawer = boolean;

export type DrawerContextProviderProps = {
  children: React.ReactNode;
};

export type DrawerContextType = {
  showDrawer: Drawer;
  setShowDrawer: React.Dispatch<React.SetStateAction<Drawer>>;
};

const ActiveSectionContext = createContext<DrawerContextType | null>(null);

const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
  const [showDrawer, setShowDrawer] = useState<Drawer>(false);

  return (
    <ActiveSectionContext.Provider
      value={{
        showDrawer,
        setShowDrawer,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useDrawerContext must be used within an DrawerContextProvider',
    );
  }

  return context;
};

export default DrawerContextProvider;