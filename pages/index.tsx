import { useState } from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
// import { useTranslation } from 'react-i18next';

import LocaleSwitch from 'components/LocaleSwitch';
import Header from 'containers/Header';
import Losses from 'containers/Losses';

import styles from '../styles/Home.module.scss';

interface Props {
  host: string | null;
}

const Home: NextPage<Props> = (props) => {
  const { host } = props;
  const [locale, setLocale] = useState<string>('uk');

  return (
    <div className={styles.container}>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7FY0FH6FQT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7FY0FH6FQT');
        `}
      </Script>
      <Head>
        <title>Втрати окупантів</title>
        <meta
          name="Title"
          content="Losses of russian occupation forces in Ukraine"
        />
        <meta
          name="description"
          content="Losses of russian occupation forces in Ukraine"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Losses of russian occupation forces in Ukraine"
        />
        <meta
          property="og:description"
          content="Losses of russian occupation forces in Ukraine"
        />
        <meta property="og:image" content={`${host}/img/ogImg.jpg`} />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <video autoPlay muted loop>
          <source
            src="/video/background/fog_background.webm"
            type="video/webm"
          />
          <source src="/video/background/fog_background.mp4" type="video/mp4" />
        </video>
        <LocaleSwitch changeLanguage={(value: string) => setLocale(value)} />
        <div className={styles.lossesContent}>
          <Header locale={locale} />
          <Losses locale={locale} />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => ({ props: { host: context.req.headers.host || null } });

export default Home;
