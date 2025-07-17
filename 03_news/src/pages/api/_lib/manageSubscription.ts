import { stripe } from "../../../services/stripe";
import { supabase } from "../../../services/supabase";

export async function saveSubscription(subscriptionId: string, customerId: string, criaSubscription = false) {
  
  // buscar o user no banco de dados com o ID stripe_customerId
  const user = await supabase.from('users').select('*').eq('stripe_customer_id', customerId)
  // console.log('->>> manageSubscriptioopn user: ', user)

  const subscription = await stripe.subscriptions.retrieve(subscriptionId)
  // console.log('->>> subscription: ', subscription)

  //  slavar os dados da subscription do user no banco de dados em uma nova collection

  const subscriptionData = {
    user_id: user.data[0].id,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  }

  console.log('->>> subscriptiondata', subscriptionData)

  if (criaSubscription) {
    //  TA CRIANDO SUBSCRIPTION MESMO QUE O USER JA TENHA UMA ATIVA?
    await supabase.from('subscriptions').insert([subscriptionData])

  } else {
//  altera o status da subscription já existente sem criar nova
    console.log("->>> altera status para canceled no supabase: ", subscription.status)
    await supabase.from('subscriptions').update({status: subscription.status}).eq('user_id', user.data[0].id)

  }
} 