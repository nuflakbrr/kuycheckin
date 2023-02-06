import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Navbar from '../components/Common/Navbar/Navbar';
import Footer from '../components/Common/Footer';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport' content='width=device-width, initial-scale=1" />
        <meta name="theme-color' content='#000000" />
        <link
          rel="shortcut icon"
          href="/assets/favicon.png"
          type="image/x-icon"
        />
      </Head>

      <Navbar />

      <ScrollToTop />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
