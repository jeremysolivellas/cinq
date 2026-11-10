import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci — Cinq",
  robots: { index: false },
};

export default function Merci() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-5">
      <p className="font-titre text-2xl font-bold text-ocre">Cinq</p>
      <h1 className="mt-3 font-titre text-3xl font-bold">
        Votre inscription est enregistrée.
      </h1>
      <p className="mt-3 leading-relaxed text-doux">
        Vous allez recevoir un e-mail de confirmation de Stripe. Nous vous
        contactons ensuite pour ouvrir votre accès.
      </p>
      <Link
        href="/"
        className="mt-8 flex min-h-14 items-center justify-center rounded-lg bg-sapin px-6 text-lg font-semibold text-papier"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
