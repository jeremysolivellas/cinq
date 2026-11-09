// Un seul endroit pour les textes et chiffres qui changent souvent.
export const SITE = {
  nom: "Cinq",
  // Remplace par l'adresse réelle une fois le site déployé (sans / final).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinq.vercel.app",
  promesse: "Vos clients contents laissent enfin leur avis.",
  description:
    "Cinq envoie une demande d'avis à chaque client après la visite, relance deux jours plus tard, et vous montre votre note sur un seul écran. Pour les professionnels de l'immobilier.",
  // Prix en euros par mois. Prix de lancement proposé : 79 €.
  prixMois: 79,
  essaiJours: 14,
  // À remplacer à l'étape 2 par le lien de paiement Stripe.
  lienCommencer: "#tarif",
} as const;

export const prixParJour = (prixMois: number) =>
  (prixMois / 30).toFixed(2).replace(".", ",");
