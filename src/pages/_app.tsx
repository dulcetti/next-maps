import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Beers</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="An example to use a Beer application using Next and Leaflet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
