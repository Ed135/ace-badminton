import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../utils/createEmotionCache';
import AppBarLeft from '../components/AppBar';
import FixedBottomNavigation from '../components/MobileAppBar';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Head>
          <title>Ace Badminton Dorset</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <AppBarLeft>
            <Component {...pageProps} />
          </AppBarLeft>
          <FixedBottomNavigation>
            <Component {...pageProps} />
          </FixedBottomNavigation>
        </ThemeProvider>
      </SnackbarProvider>
    </CacheProvider>
  );
}
