import Head from 'next/head';
import { SubscribeButton }  from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
      <>
    <Head>
        <title>Home | NEWS App NextJS</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👻 Hey, Welcome!</span>
        <h1>NEWS about <span>Learning React</span> trip.</h1>
        <p>Acesse o conteúdo da jornada <br /><span>por $1.99 month!</span></p>
        <SubscribeButton />
      </section>
      <img className={styles.avatar} src="./images/news-worker.svg" alt="Figure coding" />
    </main>
      </>
  );
}
