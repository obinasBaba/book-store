import { type DefaultSession } from 'next-auth';

type Role =
  | 'STATION_ADMIN'
  | 'USER'
  | 'SUPER_ADMIN'
  | 'TESTING'
  | 'PUBLIC_USER';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      image?: string;
      name: string;
      email: string;
      role: Role;
      user: null | object;
      station: null | object;
    };
  }
}
