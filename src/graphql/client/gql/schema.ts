import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Account = IAccount & {
  __typename?: 'Account';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: AccountRoles;
  userName: Scalars['String']['output'];
};

export type AccountPayload = IAccount & {
  __typename?: 'AccountPayload';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: AccountRoles;
  station?: Maybe<Station>;
  user?: Maybe<User>;
  userName: Scalars['String']['output'];
};

export enum AccountRoles {
  PublicUser = 'PUBLIC_USER',
  StationAdmin = 'STATION_ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  Testing = 'TESTING',
  User = 'USER'
}

export type Channel = {
  __typename?: 'Channel';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stationId?: Maybe<Scalars['String']['output']>;
};

export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Error = {
  __typename?: 'Error';
  message: Scalars['String']['output'];
};

export type FindOneInput = {
  userName: Scalars['String']['input'];
};

export type IAccount = {
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isVerified: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: AccountRoles;
  userName: Scalars['String']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logIn: ResponsePayload;
};


export type MutationLogInArgs = {
  input: LoginInput;
};

export type Program = {
  __typename?: 'Program';
  channelId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  sayHello?: Maybe<Scalars['String']['output']>;
};

export type ResponsePayload = {
  __typename?: 'ResponsePayload';
  authToken?: Maybe<Scalars['String']['output']>;
  errors: Array<Error>;
  user?: Maybe<AccountPayload>;
};

export type Schedule = {
  __typename?: 'Schedule';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  programId?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Station = {
  __typename?: 'Station';
  accountId?: Maybe<Scalars['String']['output']>;
  hosts?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  accountId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', logIn: { __typename?: 'ResponsePayload', authToken?: string | null, errors: Array<{ __typename?: 'Error', message: string }>, user?: { __typename?: 'AccountPayload', id: string, email: string, isVerified: boolean, role: AccountRoles, station?: { __typename?: 'Station', id?: string | null, accountId?: string | null } | null, user?: { __typename?: 'User', id?: string | null, accountId?: string | null } | null } | null } };

export type SayHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type SayHelloQuery = { __typename?: 'Query', sayHello?: string | null };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  logIn(input: $input) {
    errors {
      message
    }
    user {
      id
      email
      isVerified
      role
      station {
        id
        accountId
      }
      user {
        id
        accountId
      }
    }
    authToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SayHelloDocument = gql`
    query sayHello {
  sayHello
}
    `;

/**
 * __useSayHelloQuery__
 *
 * To run a query within a React component, call `useSayHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useSayHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSayHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useSayHelloQuery(baseOptions?: Apollo.QueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
      }
export function useSayHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SayHelloQuery, SayHelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SayHelloQuery, SayHelloQueryVariables>(SayHelloDocument, options);
        }
export type SayHelloQueryHookResult = ReturnType<typeof useSayHelloQuery>;
export type SayHelloLazyQueryHookResult = ReturnType<typeof useSayHelloLazyQuery>;
export type SayHelloQueryResult = Apollo.QueryResult<SayHelloQuery, SayHelloQueryVariables>;