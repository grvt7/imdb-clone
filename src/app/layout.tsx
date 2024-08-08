import type { Metadata } from 'next';
import './globals.css';
import DrawerContextProvider from '@/context/Drawer';
import BodyLayout from './BodyLayout';

export const metadata: Metadata = {
  title: 'IMDb Clone',
  description: 'IMDb clone by grvt',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={`anonymous`}
        />
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        /> */}
      </head>
      <DrawerContextProvider>
        <BodyLayout>{children}</BodyLayout>
      </DrawerContextProvider>
    </html>
  );
}
