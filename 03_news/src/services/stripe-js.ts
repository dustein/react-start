import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  
  return stripeJs;
}

// Aqui a variavel de ambiente vai precisar ser carragada no browser, ou seja, acessada pelo front-end da aplicação, por isso tem que tornar pública.