import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { amount, currency } = await req.json()
    
    const orderAmount = amount || 1
    const orderCurrency = currency || 'USD'

    const keyId = Deno.env.get('RAZORPAY_KEY_ID')
    const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET')

    if (!keyId || !keySecret) {
      throw new Error('Razorpay credentials not configured')
    }

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${keyId}:${keySecret}`)}`
      },
      body: JSON.stringify({
        amount: orderAmount,
        currency: orderCurrency,
        receipt: `receipt_${Date.now()}`,
      })
    })

    const order = await response.json()

    if (!response.ok) {
      throw new Error(order.error?.description || 'Failed to create order')
    }

    return new Response(
      JSON.stringify(order),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})
