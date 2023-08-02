import React, { useEffect } from 'react';
import BookDetailPage from '@/scenes/BookDetailPage';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { queryClient } from '@/pages/_app';
import { BookListResponse, QUERY_KEYS } from '@/actions/bookList';
import API from '@/lib/API';
import { InferGetServerSidePropsType } from 'next';
import { useSetRecoilState } from 'recoil';
import bookStoreState from '@/store';
import toast from 'react-hot-toast';

// use SSR to fetch book detail
export async function getServerSideProps(context: {
  params: { slug: string[] };
}) {
  const { slug } = context.params;
  const bookId = slug[slug.length - 1];

  // THERE WAS NO END POINT TO FETCH BOOK DETAIL IN THE FIGMA DESIGN( INSTRUCTION )

  const data = await API.get<BookListResponse>('/?page=1');

  console.log('data server ----- > : ', data, slug);

  return {
    props: {
      bookData: data.data.data[Number(bookId)],
    },
  };
}

const BookDetail = (
  // infer type from getServerSideProps
  { bookData }: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const setStoreState = useSetRecoilState(bookStoreState);

  useEffect(() => {
    if (bookData) {
      setStoreState((prev) => ({
        ...prev,
        navTitle: bookData.title,
      }));
    }

    return () => {
      setStoreState((prev) => ({
        ...prev,
        navTitle: undefined,
      }));
    };
  }, [bookData]);

  return (
    <PullToRefresh
      onRefresh={() => {
        return new Promise((resolve, reject) => {
          setStoreState((prev) => ({
            ...prev,
            isPullToRefresh: true,
          }));

          queryClient
            .invalidateQueries({
              queryKey: [QUERY_KEYS.BOOK_LIST],
            })
            .then((data) => {
              toast.success('Book list refreshed');

              resolve(data);
              setStoreState((prev) => ({
                ...prev,
                isPullToRefresh: false,
              }));
            })
            .catch(() => {
              toast.error('Error while refreshing book list');
              reject();
              setStoreState((prev) => ({
                ...prev,
                isPullToRefresh: true,
              }));
            });
        });
      }}
    >
      <BookDetailPage bookData={bookData} />
    </PullToRefresh>
  );
};

export default BookDetail;
