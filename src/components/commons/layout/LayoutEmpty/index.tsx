import React from 'react';
import s from './layout.module.scss';
import FixedLayer from '@/components/commons/FixedLayer';
import Footer from '@/components/commons/Footer';

interface Props {
  children: React.ReactNode;
}

const LayoutEmpty: React.FC<Props> = ({ children }) => {
  return (
    <>
      <FixedLayer />
      <div className={s.root}>
        <div className={s.wrapper}>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutEmpty;
