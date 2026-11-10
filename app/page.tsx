import { SITE, prixParJour } from "@/lib/config";

const BENEFICES = [
  {
    titre: "Une demande après chaque visite",
    texte:
      "Un lien ou un QR code, envoyé au client au bon moment. Il répond en deux gestes depuis son téléphone.",
  },
  {
    titre: "Une relance automatique à J+2",
    texte:
      "Le client n'a pas répondu ? Cinq le relance pour vous, deux jours plus tard. Vous ne relancez plus personne à la main.",
  },
  {
    titre: "Votre note sur un seul écran",
    texte:
      "Avis reçus, note moyenne, et une alerte dès qu'un client écrit en privé pour dire que quelque chose a mal tourné.",
  },
];

const FAQ = [
  {
    q: "Est-ce que ça marche pour mon agence ?",
    r: "Cinq est pensé pour l'immobilier : une visite, une vente ou une location, puis une demande d'avis envoyée au client.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Quelques minutes pour l'installation. Ensuite, la demande et la relance partent seules.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Vous résiliez quand vous voulez, sans engagement.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À l'envoi des demandes et des relances, au tableau de bord, et aux alertes. Un seul prix par établissement.",
  },
];

export default async function Accueil({
  searchParams,
}: {
  searchParams: Promise<{ paiement?: string }>;
}) {
  const { paiement } = await searchParams;
  return (
    <main>
      <header className="bg-sapin text-papier">
        <div className="mx-auto max-w-2xl px-5 pb-12 pt-6">
          <p className="font-titre text-2xl font-bold text-ocre">
            {SITE.nom}
          </p>
          <h1 className="mt-10 font-titre text-4xl font-bold leading-[1.08] sm:text-5xl">
            {SITE.promesse}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-trait">
            Les mécontents écrivent toujours. Les satisfaits, presque jamais.
            Votre note en ligne décide qui vous appelle : Cinq rééquilibre la
            balance, sans que vous ayez à relancer un par un.
          </p>
          <a
            href={SITE.lienCommencer}
            className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-ocre px-6 text-lg font-semibold text-encre active:translate-y-px sm:inline-flex sm:w-auto"
          >
            Commencer, c&apos;est gratuit
          </a>
          <p className="mt-3 text-sm text-trait">
            {SITE.essaiJours} jours d&apos;essai, sans carte bancaire.
          </p>
        </div>
      </header>

      <section aria-labelledby="benefices" className="mx-auto max-w-2xl px-5 py-12">
        <h2 id="benefices" className="font-titre text-2xl font-bold">
          Trois choses, rien de plus
        </h2>
        <ul className="mt-6 divide-y divide-trait border-y border-trait">
          {BENEFICES.map((b, i) => (
            <li key={b.titre} className="flex gap-4 py-5">
              <span
                aria-hidden="true"
                className="font-titre text-3xl font-bold text-ocre"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{b.titre}</h3>
                <p className="mt-1 leading-relaxed text-doux">{b.texte}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="tarif"
        aria-labelledby="tarif-titre"
        className="border-y border-trait bg-white/50"
      >
        <div className="mx-auto max-w-2xl px-5 py-12">
          <h2 id="tarif-titre" className="font-titre text-2xl font-bold">
            Un prix, par établissement
          </h2>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-titre text-5xl font-bold text-sapin">
              {SITE.prixMois} €
            </span>
            <span className="text-doux">par mois</span>
          </p>
          <p className="mt-1 text-doux">
            Soit {prixParJour(SITE.prixMois)} € par jour.
          </p>
          <p className="mt-4 font-medium">
            Sans engagement, résiliable à tout moment.
          </p>
          {paiement === "annule" && (
            <p role="status" className="mt-4 rounded-lg border border-trait bg-papier p-3 text-sm">
              Le paiement a été annulé. Vous n&apos;avez rien payé. Vous pouvez
              recommencer quand vous voulez.
            </p>
          )}
          {paiement === "erreur" && (
            <p role="alert" className="mt-4 rounded-lg border border-ocre bg-papier p-3 text-sm">
              Un problème est survenu. Aucun paiement n&apos;a été effectué.
              Réessayez dans un instant.
            </p>
          )}
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="mt-6 flex min-h-14 w-full items-center justify-center rounded-lg bg-sapin px-6 text-lg font-semibold text-papier active:translate-y-px sm:inline-flex sm:w-auto"
            >
              Commencer, c&apos;est gratuit
            </button>
          </form>
          <p className="mt-3 text-sm text-doux">
            {SITE.essaiJours} jours d&apos;essai, sans carte bancaire.
          </p>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-titre"
        className="mx-auto max-w-2xl px-5 py-12"
      >
        <h2 id="faq-titre" className="font-titre text-2xl font-bold">
          Questions fréquentes
        </h2>
        <div className="mt-6 divide-y divide-trait border-y border-trait">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span
                  aria-hidden="true"
                  className="text-xl text-ocre transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-2 pt-2 leading-relaxed text-doux">{f.r}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-sapin px-5 py-8 text-sm text-trait">
        <div className="mx-auto max-w-2xl">
          <p className="font-titre text-lg font-bold text-ocre">{SITE.nom}</p>
          <p className="mt-2">
            Mentions légales, CGV et politique de confidentialité : à venir
            avant l&apos;ouverture des paiements.
          </p>
        </div>
      </footer>
    </main>
  );
}
