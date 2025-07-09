import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { error } from 'console';


interface SubscribeButtonProps {
  priceId: string;
  // session: boolean;
}

export function SubscribeButton(props: SubscribeButtonProps) {

const { data: session } = useSession();

async function handleSubscribeStripe() {
  
  if (!session) {
    signIn('github')
    return;
  }
    //checkout session no Stripe
  try {
    const response = await api.post('/subscribeStripe')
  
    const { sessionId } = response.data;
  
    const stripe = await getStripeJs()
  
    // await stripe.checkout.sessions.create({sessionId: sessionId}) // Deprecated
    

  
  } catch (err) {
    alert(err.message);
  }
  }

  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribeStripe}
      >
        Subscribe NOW
      </button>
  )
}