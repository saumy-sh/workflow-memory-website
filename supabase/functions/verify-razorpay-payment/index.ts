import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function generateHmac(key: string, message: string) {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = await req.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !userId) {
      throw new Error('Missing required fields')
    }

    const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET')
    if (!keySecret) {
      throw new Error('Razorpay secret not configured')
    }

    const generatedSignature = await generateHmac(keySecret, `${razorpay_order_id}|${razorpay_payment_id}`)

    if (generatedSignature !== razorpay_signature) {
      throw new Error('Invalid signature')
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Supabase credentials not configured')
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

    const { error } = await supabaseAdmin
      .from('profiles')
      .update({ subscription_tier: 'premium' })
      .eq('id', userId)

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})
