import Link from 'next/link';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLinks';

export function Header() {

  return (

 <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
      <img className={styles.logo_img} src="/images/news-icon.svg" alt="NEWS" />
        <span>NEWS App</span>
      </div>
      <nav>

        <ActiveLink activeClassName={styles.active} href="/">
          Home
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/posts">
          Posts
        </ActiveLink>

      </nav>

        <SignInButton />
    </div>
  </header>
 ); 
}