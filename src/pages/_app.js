/* eslint-disable react/prop-types */
import Head from 'next/head';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Dev profile</title>
    </Head>
    <Component {...pageProps} />
    <Script
      type="text/javascript"
      src="https://statics-ecp.infobae.com/2023/iframeResizer.contentWindow.min.js"
    ></Script>
  </>
);

export default MyApp;
