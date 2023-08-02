import React from 'react';
import s from './home.module.scss';
import BookList from '@/scenes/HomePage/BookList';

const Home = () => {
  return (
    <div className={s.container}>
      <BookList />
      {/*  any other sections of the page goes here*/}
    </div>
  );
};

export default Home;
