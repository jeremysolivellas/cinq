import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

// Stripe appelle cette adresse à chaque événement de paiement.
// La signature est vérifiée : un faux appel est rejeté.
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) {
    return NextResponse.json({ erreur: "Configuration manquante" }, { status: 400 });
  }

  const corps = await req.text();
  let evenement: Stripe.Event;
  try {
    evenement = getStripe().webhooks.constructEvent(corps, signature, secret);
  } catch {
    return NextResponse.json({ erreur: "Signature invalide" }, { status: 400 });
  }

  switch (evenement.type) {
    case "checkout.session.completed": {
      const s = evenement.data.object as Stripe.Checkout.Session;
      // Semaine 2 : c'est ici que l'accès du client sera ouvert dans la base de données.
      console.log("Inscription confirmée :", s.id, s.customer_details?.email);
      break;
    }
    case "invoice.paid": {
      const f = evenement.data.object as Stripe.Invoice;
      console.log("Paiement reçu :", f.id, f.amount_paid);
      break;
    }
    case "invoice.payment_failed": {
      const f = evenement.data.object as Stripe.Invoice;
      console.log("Paiement échoué :", f.id);
      break;
    }
    case "customer.subscription.deleted": {
      const a = evenement.data.object as Stripe.Subscription;
      console.log("Abonnement résilié :", a.id);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ recu: true });
}
