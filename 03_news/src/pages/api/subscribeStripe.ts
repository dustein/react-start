import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { supabase } from "../../services/supabase";

// Para o typescript não reclamar da let customerId = sessio.user.stripe_customer_id
type User = {
  stripe_cutsomer_id: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {

    const session = await getSession( { req })
    // const { priceId } = req.body;
    
    const priceId = 'price_1RiyrlPwYpXky6iGFzi1Z9Wc';

    const user = await supabase.from('users').select('*').eq('email', session.user.email)
    // console.log("user data[0].stripe... : ", user.data[0].stripe_customer_id)
   
    let customer_stripe_id = user.data[0].stripe_customer_id
    console.log("->>>>> customer_stripe_id: ", customer_stripe_id)

    if (!customer_stripe_id) {
      console.log("->>>>> nao tem consumer_stripe_id")
      const stripeCustomer =  await stripe.customers.create({
        email: session.user.email,
        // e o metadata 
      })
      await supabase.from('users').update({stripe_customer_id: stripeCustomer.id}).eq('email', session.user.email)
    
      customer_stripe_id = stripeCustomer.id
    }

    // Vamos gravar no supabase o id do user gerado pelo stripe. Se ocorrer nova operação pelo mesmo usar, não vamos deixar salvar novamente no stripe como novo user. Entao antes vamos consultar no banco de dados se existe o id salvo com esse usuário.
  

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      
      // customer: stripeCustomer.id, //aqui pegamos o ID do cliente no Stripe, não é do Banco de Dados.
      customer: customer_stripe_id,
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
    return res.status(200).json({sessionId: stripeCheckoutSession.id})

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method no Allowed')
  }
}