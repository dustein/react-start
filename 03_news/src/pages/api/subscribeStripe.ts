import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {

    const session = await getSession( { req })
    // const { priceId } = req.body;
    const priceId = 'price_1RiyrlPwYpXky6iGFzi1Z9Wc';
    if (!session || !session.user || !session.user.email) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    console.log("priceId: " + priceId)

    const stripeCustomer =  await stripe.customers.create({
      email: session.user.email,
      // e o metadata 
    })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      
      customer: stripeCustomer.id, //aqui pegamos o ID do cliente no Stripe, não é do Banco de Dados.
      payment_method_types: ['card'],
      billing_address_collection: "required",
      line_items: [
        { price: priceId, quantity: 1}
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUBSCRIBED_URL,
      cancel_url: process.env.STRIPE_CANCELED_URL
    })

    // return res.status(200).json({ sessionId: stripeCheckoutSession})// Deprecated
    return res.json({url: stripeCheckoutSession.url})
    

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method no Allowed')
  }
}