import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export function Header() {

  const { asPath } = useRouter();

  console.log(asPath)

  return (
 <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
      <img className={styles.logo_img} src="/images/news-icon.svg" alt="NEWS" />
        <span>NEWS App</span>
      </div>
      <nav>
        <Link  className={styles.active} href="/">
          Home
        </Link>
        <Link href="/posts">
          Posts
        </Link>
      </nav>

        <SignInButton />
    </div>
  </header>
 ); 
}