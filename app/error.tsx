"use client";

import Link from "next/link";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-5">
      <h1 className="font-titre text-3xl font-bold">
        Un problème est survenu.
      </h1>
      <p className="mt-3 text-doux">
        Ce n&apos;est pas de votre faute. Réessayez, ou revenez à l&apos;accueil.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 flex min-h-14 items-center justify-center rounded-lg bg-sapin px-6 text-lg font-semibold text-papier"
      >
        Réessayer
      </button>
      <Link
        href="/"
        className="mt-3 flex min-h-14 items-center justify-center rounded-lg border border-trait px-6 text-lg font-semibold"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
