import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn } from 'next-auth/client';

export function SignInButton() {

  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361"/>
      Logado DuStein
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn()}>
      <FaGithub color="#eba417"/>
      Sign In with GitHub
    </button>
  )
}