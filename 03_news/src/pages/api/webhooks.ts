import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import { Stripe } from "stripe";
import { stripe } from "../../services/stripe";


async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === "string" ? Buffer.from(chunk) : chunk
    );
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false
  }
}

const eventosRelevantes = new Set([
  'checkout.session.completed'
])

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {

    const buf = await buffer(req)
    const signature = req.headers['stripe-signature']
    const secret = process.env.STRIPE_WEBHOOK_SECRET

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, signature, secret)
    } catch (err) {
      return res.status(400).send('->>>>> Webhook ERRO : ${err.message}')
    }

    // const type = event.type;
    const { type } = event;

    if (eventosRelevantes.has(type)) {
      // faz algo : saslvar no banco de dados 
      console.log("->>>>> Evento recebido? ", event)
    }

    res.status(200).json({ Okrecebido: true})
 
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method no Allowed')
  }
}


