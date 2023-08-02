import React from 'react';
import s from './book_detail.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Typography } from '@mui/material';
import Comments from '@/scenes/BookDetailPage/components/comments';
import { BookListResponse } from '@/actions/bookList';
import Image from 'next/image';

type Props = {
  bookData: BookListResponse['data'][number];
};

const BookDetailPage = ({ bookData }: Props) => {
  console.log('book data ;', bookData);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={s.swiper}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
            <SwiperSlide className={s.swiper_slide} key={idx}>
              <div className={s.book_thumbnail}>
                <Image src={bookData.coverImage} alt={'book thumbnail'} fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={s.content}>
          <Typography className={s.title} variant="h3">
            {bookData.title}
          </Typography>

          <Typography className={s.summary}>{bookData.description}</Typography>

          <div className={s.detail}>
            <Typography className={s.stock} variant="h6" color="error">
              {bookData.discountRate}%
            </Typography>

            <Typography className={s.price} variant="h6">
              {bookData.price}$
            </Typography>
          </div>

          <hr />

          <Comments />
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
