import React from 'react';
import s from './fixed.module.scss';
import TopNavBar from '@/components/commons/FixedLayer/TopNavBar';

const FixedLayer = () => {
  return (
    <div className={s.container}>
      <TopNavBar />

      {/*  any other fixed layer goes here */}
    </div>
  );
};

export default FixedLayer;
