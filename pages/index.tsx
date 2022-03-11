import type { NextPage } from 'next';
import Head from 'next/head';

import Losses from 'containers/Losses';
import Header from 'containers/Header';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Втрати окупантів</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <video autoPlay muted loop>
          <source
            src="/video/background/fog_background.webm"
            type="video/webm"
          />
          <source src="/video/background/fog_background.mp4" type="video/mp4" />
        </video>
        {/* <ul>
          <li>uk</li>
          <li>en</li>
          <li>ru</li>
        </ul> */}
        <div>
          <Header />
          <Losses />
        </div>
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

export default Home;
