import Head from 'next/head';
import styles from './styles.module.scss'


export default function Posts() {
  return (

    <>
      <Head>
        <title>Posts | News R App</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          <a href="#">

            <time>01 de janeiro de 2018</time>
            <strong>Veio Duda</strong>
            <p>Nascimento de Duda Stein.</p>

          </a>
          <a href="#">

            <time>01 de janeiro de 2018</time>
            <strong>Veio Duda</strong>
            <p>Nascimento de Duda Stein.</p>

          </a>
          <a href="#">

            <time>01 de janeiro de 2018</time>
            <strong>Veio Duda</strong>
            <p>Nascimento de Duda Stein.</p>

          </a>
          <a href="#">

            <time>01 de janeiro de 2018</time>
            <strong>Veio Duda</strong>
            <p>Nascimento de Duda Stein.</p>

          </a>
        </div>
      </main>
    </>
  )
}