import { atom } from 'recoil';

// type declaration
export type BookStoreState = {
  isPullToRefresh: boolean;
  navTitle?: string;
};

const bookStoreState = atom<BookStoreState>({
  key: 'bookStoreState',
  default: {
    isPullToRefresh: false,
    navTitle: undefined,
  },
});

export default bookStoreState;
