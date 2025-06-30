import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
 return (
  <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <div className={styles.logo}>
      <img className={styles.logo_img} src="/images/news-icon.svg" alt="NEWS" />
      <span>NEWS App</span>
      </div>
      <nav>
        <a className={styles.active} href="">Home</a>
        <a href="">Posts</a>
      </nav>

      <SignInButton />
    </div>
  </header>
 ); 
}