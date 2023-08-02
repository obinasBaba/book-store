import Head from 'next/head';
import HomePage from 'src/scenes/HomePage';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { QueryClient } from '@tanstack/react-query';
import { queryClient } from '@/pages/_app';
import { QUERY_KEYS } from '@/actions/bookList';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import bookStoreState from '@/store';

export default function Home() {
  const setStoreState = useSetRecoilState(bookStoreState);

  const onRefresh = () => {
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
  };

  return (
    <>
      <Head>
        <title>Book-Store</title>
        <meta name="description" content="Book-Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PullToRefresh onRefresh={onRefresh}>
        <HomePage />
      </PullToRefresh>
    </>
  );
}
