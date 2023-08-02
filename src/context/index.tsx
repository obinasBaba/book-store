import React, { FC } from 'react';
import AppProvider from '@/context/app';

const ContextWrapper: FC<{ children: React.ReactElement }> = ({
  children,
}: any) => {
  return (
    <AppProvider>
      <>{children}</>
    </AppProvider>
  );
};
export default ContextWrapper;
