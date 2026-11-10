import { NextResponse } from "next/server";
import { SITE } from "@/lib/config";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

// Le bouton « Commencer » envoie un formulaire ici. Aucune donnée venant du
// navigateur n'est utilisée : prix et durée d'essai sont fixés côté serveur.
export async function POST(req: Request) {
  const origine = new URL(req.url).origin;
  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: SITE.stripePriceId, quantity: 1 }],
      locale: "fr",
      // Essai sans carte : la carte n'est demandée que si Stripe en a besoin.
      payment_method_collection: "if_required",
      subscription_data: {
        trial_period_days: SITE.essaiJours,
        trial_settings: {
          end_behavior: { missing_payment_method: "cancel" },
        },
      },
      success_url: `${origine}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origine}/?paiement=annule#tarif`,
    });

    if (!session.url) {
      return NextResponse.redirect(`${origine}/?paiement=erreur#tarif`, 303);
    }
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Création de la session Stripe impossible :", err);
    return NextResponse.redirect(`${origine}/?paiement=erreur#tarif`, 303);
  }
}
