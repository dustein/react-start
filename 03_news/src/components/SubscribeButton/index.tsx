import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

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
    console.log(response.data);
  
    const { sessionId } = response.data;

    if (!sessionId) {
      alert('sessionId nao retornado do back-end')
      return
    }
  
    const stripe = await getStripeJs()
  
    await stripe.redirectToCheckout( { sessionId: sessionId } )
  
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