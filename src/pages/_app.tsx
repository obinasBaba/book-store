import type { AppProps } from 'next/app';
import ContextWrapper from '@/context';
import Layout from '@/components/commons/layout';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/createEmotoinCache';
import { CssBaseline } from '@mui/material';
import ThemeProvider from '@mui/system/ThemeProvider';
import Head from 'next/head';
import theme from '@/theme';
import '@global/index.scss';
import { SessionProvider } from 'next-auth/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <RecoilRoot>
      <ContextWrapper>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <title>Rahove . Portfolio</title>
          </Head>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ReactQueryDevtools initialIsOpen={false} />

              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </QueryClientProvider>
        </CacheProvider>
      </ContextWrapper>
    </RecoilRoot>
  );
}
