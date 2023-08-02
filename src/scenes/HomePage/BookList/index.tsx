import React, { useCallback, useRef, useState } from 'react';
import s from './book_list.module.scss';
import Image from 'next/image';
import { CircularProgress, Typography } from '@mui/material';
import Link from 'next/link';
import useActiveTrips from '@/actions/bookList';
import useIntersectionObserver from '@/hooks/useObserver';
import clsx from 'clsx';

const BookList = () => {
  const bookList = useActiveTrips();
  const fetchMoreElement = useRef<HTMLDivElement>(null);
  const { data, hasNextPage, fetchNextPage } = bookList;
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    setIsIntersecting(entry.isIntersecting);

    if (
      entry.isIntersecting &&
      hasNextPage &&
      !bookList.isFetching &&
      !bookList.isFetchingNextPage
    ) {
      // console.log('fetch more page -------> ');

      await new Promise((resolve) => setTimeout(resolve, 3000));
      void fetchNextPage();
    }
  };

  useIntersectionObserver(
    fetchMoreElement,
    useCallback(onIntersect, [isIntersecting]),
  );

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.book_list}>
          {data &&
            data.pages &&
            data.pages.map((page, idx) =>
              page.data.map((book, idx) => (
                <Link href={`/book/${book.title}-${idx + 1}`} key={idx}>
                  <div className={s.card}>
                    <div className={s.thumbnail}>
                      <Image src={book.coverImage} alt="book thumbnail" fill />
                    </div>

                    <div className={s.detail}>
                      <Typography className={s.title} variant="h6">
                        {book.title}
                      </Typography>

                      <div className={s.price}>
                        <Typography className={s.stock}>
                          {book.discountRate}%
                        </Typography>

                        <Typography className={s.price} variant="h6">
                          {book.price}$
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Link>
              )),
            )}
        </div>

        <div
          className={clsx([
            s.loading,
            ((isIntersecting && bookList.hasNextPage) ||
              bookList.isFetchingNextPage) &&
              s.visible,
          ])}
        >
          <CircularProgress size={100} />
        </div>

        <div ref={fetchMoreElement} className={s.fetch_more}></div>
      </div>
    </div>
  );
};

export default BookList;
