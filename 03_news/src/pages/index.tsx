import Head from 'next/head';
import { SubscribeButton }  from '../components/SubscribeButton';
import styles from './home.module.scss';
import { GetServerSideProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  return (
      <>
    <Head>
        <title>Home | NEWS App NextJS</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👻 Hey, Welcome!</span>
        <h1>NEWS about <span>Learning React</span> trip.</h1>
        <p>Acesse o conteúdo da jornada <br /><span>por {product.amount} month!</span></p>
        <SubscribeButton priceId={product.priceId} />
      </section>
      <img className={styles.avatar} src="./images/news-worker.svg" alt="Figure coding" />
    </main>
      </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1Rg3r1Gg7GNOkldzhmWGIgJ8');

  const product = {
    priceId : price.id,
    amount: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price.unit_amount / 100)
  }

  return {
    props: { product }
  }
}