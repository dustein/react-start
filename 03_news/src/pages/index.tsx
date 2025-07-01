import Head from 'next/head';
import { SubscribeButton }  from '../components/SubscribeButton';
import styles from './home.module.scss';
import { GetServerSideProps } from 'next';

export default function Home(props) {
  console.log(props)
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

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("Esse aparece no console do servidor Node que o Next roda")
  // Tudo que retornar de props no return abaixo, será mostrado na página. Assi o console.log na funçõ Home() mostrará a props "nome: 'Eduardo'" conforme return abaixo, aparece no console do browser cliente.
  return {
    props: { nome: 'Eduardo'}
  }
}