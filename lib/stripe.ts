import Stripe from "stripe";

// Ce fichier ne tourne que sur le serveur : la clé secrète n'arrive jamais au navigateur.
export function getStripe(): Stripe {
  const cle = process.env.STRIPE_SECRET_KEY;
  if (!cle) {
    throw new Error("STRIPE_SECRET_KEY est absente des variables d'environnement.");
  }
  return new Stripe(cle);
}
