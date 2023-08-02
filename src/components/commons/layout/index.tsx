import React from 'react';
import { Toaster } from 'react-hot-toast';
import LayoutEmpty from '@/components/commons/layout/LayoutEmpty';
import { useRouter } from 'next/router';

const Layout = ({ children }: any) => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 99999,
          },
          error: {
            style: {
              border: 'thin solid red',
              backgroundColor: '#FFEFEF',
            },
          },
        }}
      />
      <LayoutEmpty>{children}</LayoutEmpty>
    </>
  );
};

export default Layout;
