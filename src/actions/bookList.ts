import { QueryFunction, useInfiniteQuery } from '@tanstack/react-query';
import API from '@/lib/API';

export type BookListResponse = {
  hasNext: boolean;
  nextPage: number | undefined;
  totalPage: number;
  data: [
    {
      title: string;
      description: string;
      discountRate: number;
      coverImage: string;
      price: number;
    },
  ];
};

export enum QUERY_KEYS {
  BOOK_LIST = 'BOOK_LIST',
}

const getBookList: QueryFunction<BookListResponse> = async ({
  pageParam = 1,
  queryKey,
}) => {
  const res = await API.get(`/?page=${pageParam}`);

  console.log('getActiveTrips data ---- : ', res.data);

  return {
    ...res.data,
    nextPage: res.data.hasNext ? pageParam + 1 : undefined,
  };
};

const useBookList = (enabled = true, keys = [QUERY_KEYS.BOOK_LIST]) => {
  const bookListData = useInfiniteQuery(keys, {
    enabled,
    queryFn: getBookList,
    getNextPageParam: (lastPage) => {
      // console.log('last page : ', lastPage);

      if (lastPage.hasNext) {
        return lastPage.nextPage;
      }

      return undefined;
    },
  });

  return bookListData;
};

export default useBookList;
